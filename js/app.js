// Biolingo Main Application Controller
// Orchestrates views, state lifecycle, session flows, and modals

(function() {
  var state = null;
  var currentTab = "path";
  var currentSession = null;
  var currentLessonMeta = null;

  function initApp() {
    state = window.BiolingoStorage.load();

    // Apply saved language (UI, questions and answers)
    window.BiolingoI18n.initFromStorage(state.settings && state.settings.language);

    // Apply saved theme
    var theme = (state.settings && state.settings.theme) || "dark";
    document.documentElement.setAttribute("data-theme", theme);

    // Apply audio setting
    if (state.settings && state.settings.soundEnabled === false) {
      window.BiolingoAudio.setMuted(true);
    }

    // Daily quests check
    window.BiolingoRewards.checkDailyQuests(state);

    // Set up navigation
    bindNavigation();

    // Render active tab & header
    renderCurrentTab();

    // Register service worker if hosted
    registerServiceWorker();
  }

  function registerServiceWorker() {
    if ("serviceWorker" in navigator && (window.location.protocol === "http:" || window.location.protocol === "https:")) {
      navigator.serviceWorker.register("./sw.js").catch(function(err) {
        console.log("Service Worker registration optional:", err);
      });
    }
  }

  function bindNavigation() {
    var navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(function(item) {
      item.addEventListener("click", function() {
        var tab = item.getAttribute("data-tab");
        if (tab && tab !== currentTab) {
          window.BiolingoAudio.playClick();
          currentTab = tab;
          navItems.forEach(function(i) { i.classList.remove("active"); });
          item.classList.add("active");
          renderCurrentTab();
        }
      });
    });
  }

  function renderCurrentTab() {
    var mainView = document.getElementById("main-view");
    if (!mainView) return;

    window.BiolingoUI.renderHeader(state);

    if (currentTab === "path") {
      window.BiolingoUI.renderPathView(mainView, state, startLesson, startSkipAhead);
    } else if (currentTab === "review") {
      window.BiolingoUI.renderReviewView(mainView, state, startSrsReview);
    } else if (currentTab === "quests") {
      window.BiolingoUI.renderQuestsView(mainView, state);
    } else if (currentTab === "badges") {
      window.BiolingoUI.renderBadgesView(mainView, state);
    }
  }

  function startLesson(unitId, lessonId) {
    var unitFacts = window.FactRegistry.getByUnit(unitId);
    if (!unitFacts || !unitFacts.length) {
      unitFacts = window.FactRegistry.getAll();
    }

    var isExam = lessonId.indexOf("-exam") !== -1;
    var questionCount = isExam ? 12 : 8;

    var questions = window.BiolingoQuestions.createLessonQueue(unitFacts, questionCount);
    currentSession = window.BiolingoQuestions.createSession(questions);
    currentLessonMeta = { unitId: unitId, lessonId: lessonId, isExam: isExam, isSkipAhead: false, isSrsReview: false };

    hideNavAndHeader(true);
    runLessonLoop();
  }

  function startSkipAhead(targetLevelId) {
    var facts = window.FactRegistry.getByLevel(targetLevelId);
    if (!facts || !facts.length) facts = window.FactRegistry.getAll();

    var questions = window.BiolingoQuestions.createLessonQueue(facts, 10);
    currentSession = window.BiolingoQuestions.createSession(questions);
    currentLessonMeta = {
      targetLevelId: targetLevelId,
      isSkipAhead: true,
      isExam: true
    };

    hideNavAndHeader(true);
    runLessonLoop();
  }

  function startSrsReview() {
    var allFacts = window.FactRegistry.getAll();
    var availableIds = allFacts.map(function(f) { return f.id; });
    var weakIds = window.BiolingoSRS.getWeakestCards(state, availableIds, 10);

    var weakFacts = weakIds.map(function(id) {
      return window.FactRegistry.getById(id);
    }).filter(Boolean);

    if (weakFacts.length < 5) {
      weakFacts = allFacts.slice(0, 10);
    }

    var questions = window.BiolingoQuestions.createLessonQueue(weakFacts, weakFacts.length);
    currentSession = window.BiolingoQuestions.createSession(questions);
    currentLessonMeta = { isSrsReview: true };

    hideNavAndHeader(true);
    runLessonLoop();
  }

  function hideNavAndHeader(hidden) {
    var header = document.getElementById("top-header");
    var nav = document.getElementById("nav-sidebar");
    if (header) header.style.display = hidden ? "none" : "flex";
    if (nav) nav.style.display = hidden ? "none" : "flex";
  }

  function runLessonLoop() {
    var mainView = document.getElementById("main-view");
    var q = currentSession.getCurrentQuestion();

    if (!q) {
      // Completed!
      finishCurrentLesson();
      return;
    }

    window.BiolingoUI.renderLessonView(mainView, currentSession, state, {
      onAnswer: function(isCorrect) {
        var curQ = currentSession.getCurrentQuestion();
        var curCombo = currentSession.getStats().currentCombo;
        var xpEarned = window.BiolingoRewards.getQuestionXp(curCombo);

        // Update SRS
        if (curQ && curQ.factId) {
          window.BiolingoSRS.recordAnswer(state, curQ.factId, isCorrect);
        }

        // Stats & Quests
        state.stats.totalAnswered += 1;
        if (isCorrect) {
          state.stats.totalCorrect += 1;
          state.stats.xp += xpEarned;
          window.BiolingoRewards.progressQuest(state, "q_questions", 1);
          if (curCombo + 1 >= 5) {
            window.BiolingoRewards.progressQuest(state, "q_combo", 5);
          }
        }

        currentSession.answerCurrent(isCorrect, xpEarned);

        if (currentSession.getStats().maxCombo > state.stats.maxCombo) {
          state.stats.maxCombo = currentSession.getStats().maxCombo;
        }

        window.BiolingoStorage.save(state);
      },

      onNext: function() {
        runLessonLoop();
      },

      onQuit: function() {
        currentSession = null;
        currentLessonMeta = null;
        hideNavAndHeader(false);
        renderCurrentTab();
      }
    });
  }

  function finishCurrentLesson() {
    var stats = currentSession.getStats();
    state.stats.lessonsCompleted += 1;

    // Quest progress
    window.BiolingoRewards.progressQuest(state, "q_lesson", 1);

    // Update streak
    var streakRes = window.BiolingoRewards.updateStreakOnStudy(state);
    if (streakRes.savedByFreeze) {
      window.BiolingoUI.showToast(window.BiolingoI18n.t("toast.freezeSaved"), "🛡️");
    }

    // Complete lesson / checkpoint logic
    if (currentLessonMeta.isSkipAhead) {
      if (stats.firstTryAccuracy >= 80) {
        if (state.progress.unlockedLevels.indexOf(currentLessonMeta.targetLevelId) === -1) {
          state.progress.unlockedLevels.push(currentLessonMeta.targetLevelId);
        }
        // Unlock first unit of that level
        var lvlObj = window.CURRICULUM.find(function(l) { return l.levelId === currentLessonMeta.targetLevelId; });
        if (lvlObj && lvlObj.units[0]) {
          if (state.progress.unlockedUnits.indexOf(lvlObj.units[0].id) === -1) {
            state.progress.unlockedUnits.push(lvlObj.units[0].id);
          }
        }
        window.BiolingoRewards.unlockAchievement(state, "skip_champ");
        window.BiolingoUI.showToast(window.BiolingoI18n.t("toast.levelSkipped", { name: lvlObj ? window.BiolingoI18n.level(lvlObj).shortName : window.BiolingoI18n.t("toast.advanced") }), "🚀");
      } else {
        window.BiolingoUI.showToast(window.BiolingoI18n.t("toast.belowScore"), "💡");
      }
    } else if (currentLessonMeta.isSrsReview) {
      window.BiolingoRewards.unlockAchievement(state, "review_pro");
    } else if (currentLessonMeta.lessonId) {
      state.progress.completedLessons[currentLessonMeta.lessonId] = {
        stars: 3,
        firstTryAccuracy: stats.firstTryAccuracy,
        timestamp: Date.now()
      };

      if (currentLessonMeta.isExam) {
        state.progress.unitExamPassed[currentLessonMeta.unitId] = true;
        unlockNextUnit(currentLessonMeta.unitId);
      }
    }

    if (stats.firstTryAccuracy === 100) {
      window.BiolingoRewards.unlockAchievement(state, "perfect_lesson");
    }

    // Check newly unlocked achievements
    var newBadges = window.BiolingoRewards.checkAllAchievements(state);
    newBadges.forEach(function(b) {
      window.BiolingoAudio.playBadgeUnlock();
      window.BiolingoUI.showToast(window.BiolingoI18n.t("toast.badge", { title: window.BiolingoI18n.badge(b).title }), b.icon);
    });

    window.BiolingoStorage.save(state);

    var mainView = document.getElementById("main-view");
    window.BiolingoUI.renderCelebrationScreen(mainView, stats, function() {
      currentSession = null;
      currentLessonMeta = null;
      hideNavAndHeader(false);
      renderCurrentTab();
    });
  }

  function unlockNextUnit(curUnitId) {
    var allUnits = [];
    window.CURRICULUM.forEach(function(lvl) {
      lvl.units.forEach(function(u) { allUnits.push(u); });
    });

    var curIdx = -1;
    for (var i = 0; i < allUnits.length; i++) {
      if (allUnits[i].id === curUnitId) {
        curIdx = i;
        break;
      }
    }

    if (curIdx !== -1 && curIdx < allUnits.length - 1) {
      var nextUnit = allUnits[curIdx + 1];
      if (state.progress.unlockedUnits.indexOf(nextUnit.id) === -1) {
        state.progress.unlockedUnits.push(nextUnit.id);
      }

      // If next unit belongs to a new level, unlock that level
      window.CURRICULUM.forEach(function(lvl) {
        lvl.units.forEach(function(u) {
          if (u.id === nextUnit.id && state.progress.unlockedLevels.indexOf(lvl.levelId) === -1) {
            state.progress.unlockedLevels.push(lvl.levelId);
            window.BiolingoUI.showToast(window.BiolingoI18n.t("toast.newTier", { name: window.BiolingoI18n.level(lvl).shortName }), "🎉");
          }
        });
      });
    }
  }

  // Settings Modal
  function openSettings() {
    var modal = document.createElement("div");
    modal.className = "modal-backdrop";
    modal.id = "settings-modal";

    var isDark = (state.settings && state.settings.theme === "dark") || !state.settings;
    var soundOn = !state.settings || state.settings.soundEnabled !== false;

    var T = function(key) { return window.BiolingoI18n.t(key); };
    var curLang = window.BiolingoI18n.getLang();
    var langOptions = window.BiolingoI18n.languages.map(function(l) {
      return '<option value="' + l.code + '"' + (l.code === curLang ? ' selected' : '') + '>' + l.label + '</option>';
    }).join('');

    modal.innerHTML = [
      '<div class="modal-card">',
      '  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">',
      '    <h3 style="font-size:20px; font-weight:900;">' + T("settings.title") + '</h3>',
      '    <button id="btn-close-modal" style="font-size:22px; color:var(--text-secondary);">✕</button>',
      '  </div>',
      '  <div style="display:flex; flex-direction:column; gap:16px;">',
      '    <div style="display:flex; justify-content:space-between; align-items:center;">',
      '      <div><strong>' + T("settings.theme") + '</strong><div style="font-size:12px; color:var(--text-secondary);">' + T("settings.themeDesc") + '</div></div>',
      '      <button class="btn-action-primary" id="btn-toggle-theme" style="padding:8px 16px; font-size:13px;">' + (isDark ? T("settings.dark") : T("settings.light")) + '</button>',
      '    </div>',
      '    <div style="display:flex; justify-content:space-between; align-items:center;">',
      '      <div><strong>' + T("settings.audio") + '</strong><div style="font-size:12px; color:var(--text-secondary);">' + T("settings.audioDesc") + '</div></div>',
      '      <button class="btn-action-primary" id="btn-toggle-sound" style="padding:8px 16px; font-size:13px;">' + (soundOn ? T("settings.on") : T("settings.muted")) + '</button>',
      '    </div>',
      '    <div style="display:flex; justify-content:space-between; align-items:center; gap:12px;">',
      '      <div><strong>🌐 ' + T("settings.language") + '</strong><div style="font-size:12px; color:var(--text-secondary);">' + T("settings.languageDesc") + '</div></div>',
      '      <select id="select-language" aria-label="' + T("settings.language") + '" style="padding:8px 12px; font-size:13px; font-weight:700; border-radius:10px; border:1px solid var(--border-color); background:var(--bg-surface); color:var(--text-primary); cursor:pointer;">' + langOptions + '</select>',
      '    </div>',
      '    <hr style="border:none; border-top:1px solid var(--border-color); margin:4px 0;"/>',
      '    <div>',
      '      <strong>' + T("settings.saveData") + '</strong>',
      '      <div style="font-size:12px; color:var(--text-secondary); margin-bottom:10px;">' + T("settings.saveDesc") + '</div>',
      '      <div style="display:flex; gap:10px;">',
      '        <button class="btn-action-primary" id="btn-export-save" style="flex:1; padding:10px; font-size:13px;">' + T("settings.export") + '</button>',
      '        <button class="btn-action-primary" id="btn-import-save" style="flex:1; padding:10px; font-size:13px; background:#475569; box-shadow:0 4px 0 #334155;">' + T("settings.import") + '</button>',
      '        <input type="file" id="file-import-input" accept=".json" style="display:none;"/>',
      '      </div>',
      '    </div>',
      '    <hr style="border:none; border-top:1px solid var(--border-color); margin:4px 0;"/>',
      '    <div>',
      '      <button id="btn-reset-save" style="color:var(--accent-danger); font-size:13px; font-weight:700;">' + T("settings.reset") + '</button>',
      '    </div>',
      '  </div>',
      '</div>',
    ].join('');

    document.body.appendChild(modal);

    document.getElementById("btn-close-modal").onclick = function() { modal.remove(); };
    modal.onclick = function(e) { if (e.target === modal) modal.remove(); };

    // Toggle theme
    document.getElementById("btn-toggle-theme").onclick = function() {
      var nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      state.settings.theme = nextTheme;
      window.BiolingoStorage.save(state);
      this.textContent = nextTheme === "dark" ? window.BiolingoI18n.t("settings.dark") : window.BiolingoI18n.t("settings.light");
    };

    // Change language: re-render whole game (UI, questions and answers) in the new language
    document.getElementById("select-language").onchange = function() {
      state.settings.language = this.value;
      window.BiolingoI18n.setLang(this.value);
      window.BiolingoStorage.save(state);
      modal.remove();
      renderCurrentTab();
      openSettings();
    };

    // Toggle sound
    document.getElementById("btn-toggle-sound").onclick = function() {
      var nextSound = !state.settings.soundEnabled;
      state.settings.soundEnabled = nextSound;
      window.BiolingoAudio.setMuted(!nextSound);
      window.BiolingoStorage.save(state);
      this.textContent = nextSound ? window.BiolingoI18n.t("settings.on") : window.BiolingoI18n.t("settings.muted");
      if (nextSound) window.BiolingoAudio.playCorrect(1);
    };

    // Export
    document.getElementById("btn-export-save").onclick = function() {
      window.BiolingoStorage.exportJSON(state);
    };

    // Import
    var fileInput = document.getElementById("file-import-input");
    document.getElementById("btn-import-save").onclick = function() {
      fileInput.click();
    };

    fileInput.onchange = function(e) {
      var file = e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function(evt) {
        var res = window.BiolingoStorage.importJSON(evt.target.result);
        if (res.success) {
          state = res.state;
          window.BiolingoI18n.initFromStorage(state.settings && state.settings.language);
          modal.remove();
          renderCurrentTab();
          window.BiolingoUI.showToast(window.BiolingoI18n.t("settings.imported"), "✅");
        } else {
          alert(window.BiolingoI18n.t("settings.importFail") + res.error);
        }
      };
      reader.readAsText(file);
    };

    // Reset
    document.getElementById("btn-reset-save").onclick = function() {
      if (confirm(window.BiolingoI18n.t("settings.resetConfirm"))) {
        var keepLang = window.BiolingoI18n.getLang();
        state = window.BiolingoStorage.reset();
        state.settings.language = keepLang;
        window.BiolingoStorage.save(state);
        modal.remove();
        renderCurrentTab();
        window.BiolingoUI.showToast(window.BiolingoI18n.t("settings.resetDone"), "🔄");
      }
    };
  }

  window.BiolingoApp = {
    init: initApp,
    getState: function() { return state; },
    openSettings: openSettings,
    renderTab: renderCurrentTab
  };

  // Run on DOMContentLoaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();
