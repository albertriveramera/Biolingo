// Biolingo UI Rendering Engine
// Path, Lesson, SRS Review, Quests, Badges, and Modal Views

(function() {
  function T(key, params) { return window.BiolingoI18n.t(key, params); }

  function renderConfetti() {
    var canvas = document.createElement("canvas");
    canvas.className = "confetti-canvas";
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");

    var width = (canvas.width = window.innerWidth);
    var height = (canvas.height = window.innerHeight);

    var pieces = [];
    var colors = ["#38bdf8", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6", "#ef4444"];

    for (var i = 0; i < 90; i++) {
      pieces.push({
        x: Math.random() * width,
        y: Math.random() * -height * 0.5,
        w: Math.random() * 8 + 4,
        h: Math.random() * 8 + 4,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 4 + 3,
        rot: Math.random() * 360,
        vrot: (Math.random() - 0.5) * 8,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    var startTime = Date.now();
    function animate() {
      if (Date.now() - startTime > 3200) {
        canvas.remove();
        return;
      }
      ctx.clearRect(0, 0, width, height);
      pieces.forEach(function(p) {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vrot;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      requestAnimationFrame(animate);
    }
    animate();
  }

  window.BiolingoUI = {
    triggerConfetti: renderConfetti,

    showToast: function(title, icon) {
      var container = document.getElementById("toast-container");
      if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        container.className = "toast-container";
        document.body.appendChild(container);
      }
      var toast = document.createElement("div");
      toast.className = "toast-item";
      toast.innerHTML = '<span style="font-size:20px;">' + (icon || "🏆") + '</span><span>' + title + '</span>';
      container.appendChild(toast);
      setTimeout(function() {
        toast.remove();
      }, 3500);
    },

    renderHeader: function(state) {
      var lvlData = window.BiolingoRewards.calculateLevel(state.stats.xp);
      state.stats.level = lvlData.level;

      var header = document.getElementById("top-header");
      if (!header) return;

      var flameClass = state.streak.current > 0 ? "stat-chip streak active" : "stat-chip streak";
      var freezeBadge = state.streak.freezesAvailable > 0 ? '<span title="' + T("header.freeze") + '"> 🛡️' + state.streak.freezesAvailable + '</span>' : '';

      header.innerHTML = [
        '<div class="top-header-left">',
        '  <div class="' + flameClass + '" title="' + T("header.streak") + '">',
        '    <span>🔥</span><span>' + state.streak.current + '</span>' + freezeBadge,
        '  </div>',
        '  <div class="stat-chip xp" title="' + T("header.xp") + '">',
        '    <span>⚡</span><span>' + state.stats.xp + ' XP</span>',
        '  </div>',
        '</div>',
        '<div class="top-header-right">',
        '  <div class="stat-chip level" title="' + T("header.level") + '">',
        '    <span>🎖️</span><span>' + T("header.lvl", { n: lvlData.level, p: lvlData.progressPercent }) + '</span>',
        '  </div>',
        '  <button id="btn-open-settings" style="font-size: 19px; padding: 4px; color: var(--text-secondary);" title="' + T("header.settings") + '">⚙️</button>',
        '</div>'
      ].join('');

      var settingsBtn = document.getElementById("btn-open-settings");
      if (settingsBtn) {
        settingsBtn.addEventListener("click", function() {
          window.BiolingoApp.openSettings();
        });
      }
    },

    renderPathView: function(container, state, onStartLesson, onSkipAhead) {
      var curriculum = window.CURRICULUM;
      var html = ['<div class="page-container">'];

      curriculum.forEach(function(rawLvl) {
        var lvl = window.BiolingoI18n.level(rawLvl);
        var isLevelUnlocked = state.progress.unlockedLevels.indexOf(lvl.levelId) !== -1;

        html.push('<div class="level-section">');
        html.push('  <div class="level-banner" style="background:' + lvl.gradient + ';">');
        html.push('    <div class="level-badge-tag">' + lvl.badge + ' ' + lvl.shortName + '</div>');
        html.push('    <div class="level-banner-title">' + lvl.levelName + '</div>');
        html.push('    <div class="level-banner-desc">' + lvl.tagline + '</div>');

        if (!isLevelUnlocked) {
          html.push('    <div class="level-actions">');
          html.push('      <button class="btn-skip-ahead" data-level="' + lvl.levelId + '">' + T("path.skip") + '</button>');
          html.push('    </div>');
        }
        html.push('  </div>');

        // Render Units
        rawLvl.units.forEach(function(rawUnit) {
          var unit = window.BiolingoI18n.unit(rawUnit);
          var isUnitUnlocked = isLevelUnlocked && state.progress.unlockedUnits.indexOf(unit.id) !== -1;

          html.push('  <div class="unit-card">');
          html.push('    <div class="unit-header">');
          html.push('      <div class="unit-info">');
          html.push('        <h3><span>' + unit.icon + '</span> ' + unit.title + '</h3>');
          html.push('        <p>' + unit.subtitle + '</p>');
          html.push('      </div>');
          html.push('    </div>');

          // Winding nodes
          html.push('    <div class="path-nodes">');
          unit.lessons.forEach(function(lesson, idx) {
            var lessonKey = lesson.id;
            var isCompleted = !!state.progress.completedLessons[lessonKey];
            var isNext = false;

            if (isUnitUnlocked && !isCompleted) {
              if (idx === 0) isNext = true;
              else {
                var prevKey = unit.lessons[idx - 1].id;
                if (state.progress.completedLessons[prevKey]) isNext = true;
              }
            }

            var btnClass = "node-btn";
            var icon = lesson.isExam ? "👑" : "★";
            if (lesson.isExam) btnClass += " exam";

            if (isCompleted) {
              btnClass += " completed";
            } else if (isNext) {
              btnClass += " active-current";
            } else {
              btnClass += " locked";
              icon = "🔒";
            }

            html.push('      <div class="path-node-wrapper">');
            html.push('        <button class="' + btnClass + '" data-unit="' + unit.id + '" data-lesson="' + lesson.id + '"' + (!isCompleted && !isNext ? ' disabled' : '') + '>');
            html.push('          <span>' + icon + '</span>');
            if (isCompleted) {
              html.push('          <span class="node-stars">★★★</span>');
            }
            html.push('        </button>');
            html.push('        <div style="font-size:12px; font-weight:700; margin-top:6px; color:var(--text-secondary);">' + window.BiolingoI18n.lesson(lesson).title + '</div>');
            html.push('      </div>');
          });
          html.push('    </div>'); // path-nodes
          html.push('  </div>'); // unit-card
        });

        html.push('</div>'); // level-section
      });

      html.push('</div>'); // page-container
      container.innerHTML = html.join('\n');

      // Bind node button clicks
      var nodeBtns = container.querySelectorAll(".node-btn:not([disabled])");
      nodeBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
          var uId = btn.getAttribute("data-unit");
          var lId = btn.getAttribute("data-lesson");
          onStartLesson(uId, lId);
        });
      });

      // Bind skip-ahead buttons
      var skipBtns = container.querySelectorAll(".btn-skip-ahead");
      skipBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
          var targetLvl = btn.getAttribute("data-level");
          onSkipAhead(targetLvl);
        });
      });
    },

    renderLessonView: function(container, session, state, callbacks) {
      var curQ = session.getCurrentQuestion();
      if (!curQ) return;

      var total = session.getTotalInitial();
      var remaining = session.getRemainingCount();
      var completedCount = total - remaining;
      var progressPct = Math.min(100, Math.max(5, Math.floor((completedCount / total) * 100)));
      var curCombo = session.getStats().currentCombo;

      var html = [
        '<div class="lesson-screen">',
        '  <div class="lesson-header">',
        '    <button class="btn-close-lesson" id="btn-quit-lesson">✕</button>',
        '    <div class="lesson-progress-bar">',
        '      <div class="lesson-progress-fill" style="width: ' + progressPct + '%;"></div>',
        '    </div>',
        (curCombo >= 2 ? '<div class="lesson-combo-indicator">' + T("lesson.combo", { n: curCombo }) + '</div>' : ''),
        '  </div>',
        '  <div class="lesson-body">',
        '    <div class="question-category">' + (curQ.promptCategory || T("lesson.defaultCategory")) + '</div>',
        '    <h2 class="question-title">' + curQ.prompt + '</h2>'
      ];

      if (curQ.highlightTerm) {
        html.push('    <div style="font-size: 20px; font-weight: 800; color: var(--accent-primary); margin-bottom: 16px;">' + curQ.highlightTerm + '</div>');
      }

      if (curQ.quoteText) {
        html.push('    <div class="question-quote">“' + curQ.quoteText + '”</div>');
      }

      // Render Question Types
      if (curQ.type === "cloze") {
        var sentenceHtml = (curQ.sentence || T("lesson.clozeDefault", { blank: "{blank}" })).replace(
          "{blank}",
          '<span class="cloze-blank-slot" id="cloze-blank-slot">_______</span>'
        );
        html.push('    <div class="cloze-sentence-card">' + sentenceHtml + '</div>');
        html.push('    <div class="options-grid">');
        curQ.options.forEach(function(opt, idx) {
          html.push('      <button class="option-card" data-idx="' + idx + '" data-val="' + encodeURIComponent(opt) + '">');
          html.push('        <span>' + opt + '</span>');
          html.push('      </button>');
        });
        html.push('    </div>');
      } else if (curQ.type === "mcq") {
        html.push('    <div class="options-grid">');
        curQ.options.forEach(function(opt, idx) {
          html.push('      <button class="option-card" data-idx="' + idx + '" data-val="' + encodeURIComponent(opt) + '">');
          html.push('        <span>' + opt + '</span>');
          html.push('      </button>');
        });
        html.push('    </div>');
      } else if (curQ.type === "truefalse") {
        html.push('    <div class="question-quote" style="font-size:16px;">' + curQ.statement + '</div>');
        html.push('    <div class="tf-grid">');
        html.push('      <button class="tf-btn" data-val="true"><span>✅</span><span>' + T("lesson.true") + '</span></button>');
        html.push('      <button class="tf-btn" data-val="false"><span>❌</span><span>' + T("lesson.false") + '</span></button>');
        html.push('    </div>');
      } else if (curQ.type === "sequence") {
        html.push('    <div class="sequence-list" id="seq-container">');
        curQ.scrambledSteps.forEach(function(step, idx) {
          html.push('      <div class="sequence-item" data-idx="' + idx + '">');
          html.push('        <div class="seq-num">' + (idx + 1) + '</div>');
          html.push('        <div class="seq-text">' + step + '</div>');
          html.push('        <div class="seq-actions">');
          if (idx > 0) html.push('          <button class="seq-arrow-btn btn-seq-up" data-idx="' + idx + '">▲</button>');
          if (idx < curQ.scrambledSteps.length - 1) html.push('          <button class="seq-arrow-btn btn-seq-down" data-idx="' + idx + '">▼</button>');
          html.push('        </div>');
          html.push('      </div>');
        });
        html.push('    </div>');
      } else if (curQ.type === "match_pairs") {
        html.push('    <div class="match-pairs-container">');
        html.push('      <div class="match-column" id="col-left">');
        curQ.leftList.forEach(function(item) {
          html.push('        <button class="pair-card pair-left" data-id="' + item.id + '">' + item.text + '</button>');
        });
        html.push('      </div>');
        html.push('      <div class="match-column" id="col-right">');
        curQ.rightList.forEach(function(item) {
          html.push('        <button class="pair-card pair-right" data-text="' + encodeURIComponent(item.text) + '">' + item.text + '</button>');
        });
        html.push('      </div>');
        html.push('    </div>');
      } else if (curQ.type === "diagram") {
        html.push('    <div class="diagram-container">');
        html.push(window.BiolingoDiagrams.render(curQ.diagramName, curQ.targetLabel));
        html.push('    </div>');
        html.push('    <div class="options-grid">');
        curQ.options.forEach(function(opt, idx) {
          html.push('      <button class="option-card" data-idx="' + idx + '" data-val="' + encodeURIComponent(opt) + '">');
          html.push('        <span>' + opt + '</span>');
          html.push('      </button>');
        });
        html.push('    </div>');
      }

      html.push('  </div>'); // lesson-body

      // Footer
      html.push('  <div class="lesson-footer" id="lesson-footer">');
      html.push('    <div class="lesson-footer-content">');
      html.push('      <div class="feedback-sheet" id="feedback-sheet" style="display:none;"></div>');
      html.push('      <button class="btn-action-primary" id="btn-lesson-action" disabled>' + T("lesson.check") + '</button>');
      html.push('    </div>');
      html.push('  </div>');
      html.push('</div>');

      container.innerHTML = html.join('\n');

      var actionBtn = document.getElementById("btn-lesson-action");
      var footer = document.getElementById("lesson-footer");
      var feedbackSheet = document.getElementById("feedback-sheet");
      var quitBtn = document.getElementById("btn-quit-lesson");

      quitBtn.addEventListener("click", function() {
        if (confirm(T("lesson.quitConfirm"))) {
          callbacks.onQuit();
        }
      });

      var currentSelectedValue = null;
      var hasChecked = false;

      // Handle Option Selection
      if (curQ.type === "mcq" || curQ.type === "cloze" || curQ.type === "diagram") {
        var cards = container.querySelectorAll(".option-card");
        cards.forEach(function(card) {
          card.addEventListener("click", function() {
            if (hasChecked) return;
            window.BiolingoAudio.playClick();
            cards.forEach(function(c) { c.classList.remove("selected"); });
            card.classList.add("selected");
            currentSelectedValue = decodeURIComponent(card.getAttribute("data-val"));
            actionBtn.disabled = false;

            if (curQ.type === "cloze") {
              var blankSlot = document.getElementById("cloze-blank-slot");
              if (blankSlot) {
                blankSlot.textContent = currentSelectedValue;
                blankSlot.classList.add("filled");
              }
            }
          });
        });
      } else if (curQ.type === "truefalse") {
        var tfBtns = container.querySelectorAll(".tf-btn");
        tfBtns.forEach(function(btn) {
          btn.addEventListener("click", function() {
            if (hasChecked) return;
            window.BiolingoAudio.playClick();
            tfBtns.forEach(function(b) { b.classList.remove("selected"); });
            btn.classList.add("selected");
            currentSelectedValue = btn.getAttribute("data-val") === "true";
            actionBtn.disabled = false;
          });
        });
      } else if (curQ.type === "sequence") {
        actionBtn.disabled = false; // Can check right away or reorder
        function bindSequenceArrows() {
          var upBtns = container.querySelectorAll(".btn-seq-up");
          var downBtns = container.querySelectorAll(".btn-seq-down");
          upBtns.forEach(function(b) {
            b.onclick = function() {
              var idx = parseInt(b.getAttribute("data-idx"), 10);
              var temp = curQ.scrambledSteps[idx];
              curQ.scrambledSteps[idx] = curQ.scrambledSteps[idx - 1];
              curQ.scrambledSteps[idx - 1] = temp;
              window.BiolingoUI.renderLessonView(container, session, state, callbacks);
            };
          });
          downBtns.forEach(function(b) {
            b.onclick = function() {
              var idx = parseInt(b.getAttribute("data-idx"), 10);
              var temp = curQ.scrambledSteps[idx];
              curQ.scrambledSteps[idx] = curQ.scrambledSteps[idx + 1];
              curQ.scrambledSteps[idx + 1] = temp;
              window.BiolingoUI.renderLessonView(container, session, state, callbacks);
            };
          });
        }
        bindSequenceArrows();
      } else if (curQ.type === "match_pairs") {
        var selectedLeftId = null;
        var selectedRightText = null;
        var matchesMade = 0;
        var totalMatches = Object.keys(curQ.pairsMap).length;

        var leftBtns = container.querySelectorAll(".pair-left");
        var rightBtns = container.querySelectorAll(".pair-right");

        function failMatch(leftElem, rightElem, leftId, rightText) {
          if (hasChecked) return;
          hasChecked = true;

          if (leftElem) {
            leftElem.classList.remove("selected");
            leftElem.classList.add("mismatch");
          }
          if (rightElem) {
            rightElem.classList.remove("selected");
            rightElem.classList.add("mismatch");
          }

          // Disable further interaction on pair buttons
          leftBtns.forEach(function(b) { b.style.pointerEvents = "none"; });
          rightBtns.forEach(function(b) { b.style.pointerEvents = "none"; });

          window.BiolingoAudio.playWrong();
          window.BiolingoAudio.vibrate([60, 40, 60]);

          footer.className = "lesson-footer state-wrong";
          actionBtn.className = "btn-action-primary btn-check-wrong";

          var leftItemObj = curQ.leftList.find(function(i) { return i.id === leftId; });
          var leftLabel = leftItemObj ? leftItemObj.text : T("lesson.term");
          var correctRight = curQ.pairsMap[leftId] || "";

          feedbackSheet.innerHTML = [
            '<div class="feedback-icon">💡</div>',
            '<div class="feedback-text">',
            '  <h4>' + T("lesson.incorrectMatch") + '</h4>',
            '  <p>' + T("lesson.matchesWith", { left: leftLabel, right: correctRight }) + (curQ.explain || T("lesson.reviewAgain")) + '</p>',
            '</div>'
          ].join('');

          feedbackSheet.style.display = "flex";
          actionBtn.disabled = false;
          actionBtn.textContent = T("lesson.continue");

          callbacks.onAnswer(false);
        }

        function succeedMatch(leftElem, rightElem) {
          window.BiolingoAudio.playCorrect(1);
          if (leftElem) {
            leftElem.classList.remove("selected");
            leftElem.classList.add("matched");
          }
          if (rightElem) {
            rightElem.classList.remove("selected");
            rightElem.classList.add("matched");
          }

          selectedLeftId = null;
          selectedRightText = null;
          matchesMade++;

          if (matchesMade >= totalMatches) {
            hasChecked = true;
            window.BiolingoAudio.playCorrect(session.getStats().currentCombo + 1);
            window.BiolingoAudio.vibrate([40]);

            footer.className = "lesson-footer state-correct";
            actionBtn.className = "btn-action-primary btn-check-correct";
            feedbackSheet.innerHTML = [
              '<div class="feedback-icon">🎉</div>',
              '<div class="feedback-text">',
              '  <h4>' + T("lesson.allMatched") + '</h4>',
              '  <p>' + (curQ.explain || T("lesson.spotPairing")) + '</p>',
              '</div>'
            ].join('');

            feedbackSheet.style.display = "flex";
            actionBtn.disabled = false;
            actionBtn.textContent = T("lesson.continue");

            callbacks.onAnswer(true);
          }
        }

        leftBtns.forEach(function(btn) {
          btn.addEventListener("click", function() {
            if (hasChecked || btn.classList.contains("matched")) return;
            window.BiolingoAudio.playClick();
            var leftId = btn.getAttribute("data-id");

            if (selectedRightText) {
              // Right was already selected, evaluate match!
              var rightElem = container.querySelector('.pair-right.selected');
              var expectedRight = curQ.pairsMap[leftId];
              if (selectedRightText === expectedRight) {
                succeedMatch(btn, rightElem);
              } else {
                failMatch(btn, rightElem, leftId, selectedRightText);
              }
            } else {
              // Select / switch Left button
              leftBtns.forEach(function(b) { b.classList.remove("selected"); });
              btn.classList.add("selected");
              selectedLeftId = leftId;
            }
          });
        });

        rightBtns.forEach(function(btn) {
          btn.addEventListener("click", function() {
            if (hasChecked || btn.classList.contains("matched")) return;
            window.BiolingoAudio.playClick();
            var rightText = decodeURIComponent(btn.getAttribute("data-text"));

            if (selectedLeftId) {
              // Left was already selected, evaluate match!
              var leftElem = container.querySelector('.pair-left.selected');
              var expectedRight = curQ.pairsMap[selectedLeftId];
              if (rightText === expectedRight) {
                succeedMatch(leftElem, btn);
              } else {
                failMatch(leftElem, btn, selectedLeftId, rightText);
              }
            } else {
              // Select / switch Right button
              rightBtns.forEach(function(b) { b.classList.remove("selected"); });
              btn.classList.add("selected");
              selectedRightText = rightText;
            }
          });
        });
      }

      // Check / Continue Button Click
      actionBtn.addEventListener("click", function() {
        if (!hasChecked) {
          hasChecked = true;
          var isCorrect = false;

          if (curQ.type === "mcq" || curQ.type === "cloze" || curQ.type === "diagram") {
            isCorrect = currentSelectedValue === curQ.correctAnswer;
          } else if (curQ.type === "truefalse") {
            isCorrect = currentSelectedValue === curQ.correctAnswer;
          } else if (curQ.type === "sequence") {
            isCorrect = JSON.stringify(curQ.scrambledSteps) === JSON.stringify(curQ.correctSteps);
          } else if (curQ.type === "match_pairs") {
            isCorrect = true; // Completed all pairs
          }

          // Audio & Haptic Feedback
          if (isCorrect) {
            window.BiolingoAudio.playCorrect(session.getStats().currentCombo + 1);
            window.BiolingoAudio.vibrate([40]);
            footer.className = "lesson-footer state-correct";
            actionBtn.className = "btn-action-primary btn-check-correct";
            feedbackSheet.innerHTML = [
              '<div class="feedback-icon">🎉</div>',
              '<div class="feedback-text">',
              '  <h4>' + T("lesson.excellent") + '</h4>',
              '  <p>' + (curQ.explain || T("lesson.spotUnderstanding")) + '</p>',
              '</div>'
            ].join('');
          } else {
            window.BiolingoAudio.playWrong();
            window.BiolingoAudio.vibrate([60, 40, 60]);
            footer.className = "lesson-footer state-wrong";
            actionBtn.className = "btn-action-primary btn-check-wrong";
            feedbackSheet.innerHTML = [
              '<div class="feedback-icon">💡</div>',
              '<div class="feedback-text">',
              '  <h4>' + T("lesson.reviewFact") + '</h4>',
              '  <p>' + (curQ.explain || T("lesson.reviewAgain2")) + '</p>',
              '</div>'
            ].join('');
          }

          feedbackSheet.style.display = "flex";
          actionBtn.textContent = T("lesson.continue");

          // Inform session
          callbacks.onAnswer(isCorrect);
        } else {
          // Continue to next question or finish
          callbacks.onNext();
        }
      });
    },

    renderCelebrationScreen: function(container, stats, onContinue) {
      window.BiolingoAudio.playLevelUp();
      window.BiolingoUI.triggerConfetti();

      var html = [
        '<div class="celebration-view">',
        '  <div class="celebration-card">',
        '    <div style="margin-bottom: 12px;">' + window.BiolingoMascot.render("cheering", 110) + '</div>',
        '    <h1 style="font-size: 26px; font-weight: 900; margin-bottom: 4px;">' + T("celebration.title") + '</h1>',
        '    <p style="font-size: 14px; color: var(--text-secondary);">' + T("celebration.sub") + '</p>',
        '    <div class="celebration-stats-grid">',
        '      <div class="celeb-stat-box">',
        '        <div class="celeb-stat-val">+' + stats.totalXpEarned + '</div>',
        '        <div class="celeb-stat-label">' + T("celebration.xp") + '</div>',
        '      </div>',
        '      <div class="celeb-stat-box">',
        '        <div class="celeb-stat-val">' + stats.firstTryAccuracy + '%</div>',
        '        <div class="celeb-stat-label">' + T("celebration.accuracy") + '</div>',
        '      </div>',
        '      <div class="celeb-stat-box">',
        '        <div class="celeb-stat-val">🔥 ' + stats.maxCombo + 'x</div>',
        '        <div class="celeb-stat-label">' + T("celebration.maxCombo") + '</div>',
        '      </div>',
        '    </div>',
        '    <button class="btn-action-primary" id="btn-celeb-done" style="width: 100%;">' + T("celebration.continue") + '</button>',
        '  </div>',
        '</div>'
      ].join('');

      container.innerHTML = html;
      document.getElementById("btn-celeb-done").addEventListener("click", onContinue);
    },

    renderReviewView: function(container, state, onStartReview) {
      var srsDist = window.BiolingoSRS.getBoxDistribution(state);
      var html = [
        '<div class="page-container">',
        '  <div style="margin-bottom: 24px;">',
        '    <h2 style="font-size: 24px; font-weight: 900;">' + T("review.title") + '</h2>',
        '    <p style="color: var(--text-secondary); font-size: 14px;">' + T("review.desc") + '</p>',
        '  </div>',
        '  <div class="srs-box-grid">',
        '    <div class="srs-box-card"><div class="srs-box-num">' + T("review.box", { n: 1 }) + '</div><div class="srs-box-count">' + srsDist[1] + '</div></div>',
        '    <div class="srs-box-card"><div class="srs-box-num">' + T("review.box", { n: 2 }) + '</div><div class="srs-box-count">' + srsDist[2] + '</div></div>',
        '    <div class="srs-box-card"><div class="srs-box-num">' + T("review.box", { n: 3 }) + '</div><div class="srs-box-count">' + srsDist[3] + '</div></div>',
        '    <div class="srs-box-card"><div class="srs-box-num">' + T("review.box", { n: 4 }) + '</div><div class="srs-box-count">' + srsDist[4] + '</div></div>',
        '    <div class="srs-box-card"><div class="srs-box-num">' + T("review.box5") + '</div><div class="srs-box-count" style="color:var(--accent-success);">' + srsDist[5] + '</div></div>',
        '  </div>',
        '  <div style="background-color: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 24px; text-align: center;">',
        '    <div style="font-size: 40px; margin-bottom: 12px;">🧠</div>',
        '    <h3 style="font-size: 18px; font-weight: 800; margin-bottom: 6px;">' + T("review.targetTitle") + '</h3>',
        '    <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 18px; max-width: 400px; margin-left: auto; margin-right: auto;">' + T("review.targetDesc") + '</p>',
        '    <button class="btn-action-primary" id="btn-start-srs-review">' + T("review.start") + '</button>',
        '  </div>',
        '</div>'
      ].join('');

      container.innerHTML = html;
      document.getElementById("btn-start-srs-review").addEventListener("click", onStartReview);
    },

    renderQuestsView: function(container, state) {
      var quests = window.BiolingoRewards.checkDailyQuests(state);
      var html = [
        '<div class="page-container">',
        '  <div style="margin-bottom: 24px;">',
        '    <h2 style="font-size: 24px; font-weight: 900;">' + T("quests.title") + '</h2>',
        '    <p style="color: var(--text-secondary); font-size: 14px;">' + T("quests.desc") + '</p>',
        '  </div>'
      ];

      quests.forEach(function(q) {
        var pct = Math.min(100, Math.floor((q.current / q.target) * 100));
        html.push('  <div class="quest-item">');
        html.push('    <div class="quest-top">');
        html.push('      <span class="quest-desc">' + (q.completed ? '✅ ' : '🎯 ') + window.BiolingoI18n.questDesc(q) + '</span>');
        html.push('      <span class="quest-reward">+' + q.xp + ' XP</span>');
        html.push('    </div>');
        html.push('    <div class="quest-progress-bar">');
        html.push('      <div class="quest-progress-fill" style="width:' + pct + '%;"></div>');
        html.push('    </div>');
        html.push('    <div style="font-size: 11px; color: var(--text-muted); font-weight: 700;">' + T("quests.progress", { c: q.current, t: q.target }) + '</div>');
        html.push('  </div>');
      });

      html.push('</div>');
      container.innerHTML = html.join('');
    },

    renderBadgesView: function(container, state) {
      var allBadges = window.BiolingoRewards.badges;
      var unlocked = (state.achievements && state.achievements.unlocked) || {};

      var html = [
        '<div class="page-container">',
        '  <div style="margin-bottom: 24px;">',
        '    <h2 style="font-size: 24px; font-weight: 900;">' + T("badges.title") + '</h2>',
        '    <p style="color: var(--text-secondary); font-size: 14px;">' + T("badges.desc") + '</p>',
        '  </div>',
        '  <div class="badges-grid">'
      ];

      allBadges.forEach(function(rawBadge) {
        var b = window.BiolingoI18n.badge(rawBadge);
        var isUnlocked = !!unlocked[b.id];
        html.push('    <div class="badge-card' + (!isUnlocked ? ' locked' : '') + '">');
        html.push('      <div class="badge-icon">' + b.icon + '</div>');
        html.push('      <div class="badge-title">' + b.title + '</div>');
        html.push('      <div class="badge-desc">' + b.desc + '</div>');
        if (isUnlocked) {
          html.push('      <div style="font-size: 10px; color: var(--accent-success); font-weight: 800; margin-top: 4px;">' + T("badges.unlocked") + '</div>');
        } else {
          html.push('      <div style="font-size: 10px; color: var(--text-muted); font-weight: 800; margin-top: 4px;">' + T("badges.locked") + '</div>');
        }
        html.push('    </div>');
      });

      html.push('  </div>');
      html.push('</div>');
      container.innerHTML = html.join('');
    }
  };
})();
