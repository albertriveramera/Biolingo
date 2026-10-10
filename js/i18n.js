// Biolingo Internationalization Engine
// English base dictionary + lookup helpers. Spanish data lives in data/i18n_es*.js
// Content overlays are keyed by stable ids (levels, units, lessons, badges, quests, facts)

(function() {
  var EN = {
    "meta.title": "Biolingo | Biomedicine & Neuroscience Learning Odyssey",
    "meta.description": "Master biomedicine and neuroscience from High School fundamentals to PhD frontier research with spaced repetition and dynamic questions.",
    "brand.sub": "Biomed & Neuro",
    "nav.main": "Main Navigation",
    "nav.path": "Learn",
    "nav.review": "Review",
    "nav.quests": "Quests",
    "nav.badges": "Badges",
    "nav.pathAria": "Learning Path",
    "nav.reviewAria": "Spaced Repetition Review",
    "nav.questsAria": "Daily Quests",
    "nav.badgesAria": "Achievements and Profile",
    "noscript.title": "JavaScript Required",
    "noscript.body": "Please enable JavaScript to run Biolingo.",

    "header.streak": "Daily Study Streak",
    "header.freeze": "Streak freeze active",
    "header.xp": "Total XP",
    "header.level": "Player Level",
    "header.lvl": "Lvl {n} ({p}%)",
    "header.settings": "Settings",

    "path.skip": "🚀 Test Out / Skip Ahead",

    "lesson.defaultCategory": "Knowledge Check",
    "lesson.clozeDefault": "Choose the missing term: {blank}",
    "lesson.combo": "🔥 {n}x Combo",
    "lesson.true": "TRUE",
    "lesson.false": "FALSE",
    "lesson.check": "Check",
    "lesson.continue": "Continue",
    "lesson.quitConfirm": "Leave lesson? Current progress in this lesson will be lost.",
    "lesson.term": "Term",
    "lesson.incorrectMatch": "Incorrect Match!",
    "lesson.matchesWith": "<strong>{left}</strong> matches with: <em>{right}</em>. ",
    "lesson.reviewAgain": "We'll review this question again before finishing!",
    "lesson.allMatched": "All Pairs Matched!",
    "lesson.spotPairing": "Spot on biological pairing!",
    "lesson.excellent": "Excellent!",
    "lesson.spotUnderstanding": "Spot on biophysical understanding!",
    "lesson.reviewFact": "Review this fact",
    "lesson.reviewAgain2": "We will review this question again before finishing!",

    "celebration.title": "Lesson Completed!",
    "celebration.sub": "Your neural pathways are strengthening.",
    "celebration.xp": "XP Earned",
    "celebration.accuracy": "Accuracy",
    "celebration.maxCombo": "Max Combo",
    "celebration.continue": "Continue Path",

    "review.title": "Spaced Repetition & Retention",
    "review.desc": "Facts you miss return more frequently. Box 5 facts are consolidated into long-term memory.",
    "review.box": "Box {n}",
    "review.box5": "Box 5 (Mastered)",
    "review.targetTitle": "Target Weak Topics",
    "review.targetDesc": "Our algorithm selects your lowest-box facts across all unlocked levels for a high-yield recall drill.",
    "review.start": "Start Adaptive Review",

    "quests.title": "Daily Quests",
    "quests.desc": "Quests reset every midnight. Complete all 3 to earn the Triad Badge!",
    "quests.progress": "{c} / {t} completed",
    "quests.q_lesson": "Complete 1 Lesson or Checkpoint",
    "quests.q_questions": "Answer 12 Questions correctly",
    "quests.q_combo": "Achieve a 5x Combo Streak",

    "badges.title": "Achievements & Medals",
    "badges.desc": "Demonstrate mastery across biomedicine, streak longevity, and doctoral milestones.",
    "badges.unlocked": "UNLOCKED",
    "badges.locked": "LOCKED",

    "settings.title": "⚙️ Settings & Data",
    "settings.theme": "Theme",
    "settings.themeDesc": "Switch between Dark and Light mode",
    "settings.dark": "🌙 Dark",
    "settings.light": "☀️ Light",
    "settings.audio": "Audio & Sound FX",
    "settings.audioDesc": "Synthesized Web Audio sound",
    "settings.on": "🔊 On",
    "settings.muted": "🔇 Muted",
    "settings.language": "Language",
    "settings.languageDesc": "Change the language of the whole game (UI, questions and answers)",
    "settings.saveData": "Save Data & Portability",
    "settings.saveDesc": "Export progress to file or transfer across phone and PC.",
    "settings.export": "💾 Export Save",
    "settings.import": "📂 Import Save",
    "settings.reset": "⚠️ Reset All Progress",
    "settings.imported": "Save file imported successfully!",
    "settings.importFail": "Failed to import save: ",
    "settings.resetConfirm": "Are you sure you want to completely reset all your Biolingo progress? This cannot be undone.",
    "settings.resetDone": "Progress has been reset.",

    "toast.freezeSaved": "Streak Freeze saved your daily streak!",
    "toast.levelSkipped": "Level Skipped! Welcome to {name}",
    "toast.belowScore": "Score below 80%. Keep practicing!",
    "toast.badge": "Badge Unlocked: {title}",
    "toast.newTier": "Unlocked new tier: {name}!",
    "toast.advanced": "Advanced",

    "q.defRecall": "Definition Recall",
    "q.defRole": "What is the defining role of {term}?",
    "q.conceptId": "Concept Identification",
    "q.whichEntity": "Which biological entity is described below?",
    "q.funcAssoc": "Functional Association",
    "q.assocWith": "What is directly associated with: {left}?",
    "q.synPairing": "Synaptic Pairing",
    "q.matchPrompt": "Match each biomedical term with its corresponding mechanism:",
    "q.truth": "Scientific Truth Evaluation",
    "q.trueFalse": "Is the following biomedical assertion true or false?",
    "q.chronology": "Pathway Chronology",
    "q.fillBlank": "Fill in the Blank",
    "q.clozePrompt": "Complete the statement by choosing the missing scientific concept:",
    "q.anatomical": "Anatomical Recognition",
    "q.diagramPrompt": "Identify the anatomical feature highlighted by the marker:",
    "q.quantitative": "Quantitative Biophysics",
    "diagram.here": "HERE",
    "diagram.fallback": "Diagram"
  };

  var STORAGE_KEY_LANG = "biolingo.lang";
  var current = "en";

  function dictFor(lang) {
    if (lang === "es") return window.I18N_ES_UI || {};
    return EN;
  }

  function overlay(name) {
    return (current === "es" && window.I18N_ES && window.I18N_ES[name]) || null;
  }

  function copyWith(base, patch) {
    var out = {};
    for (var k in base) if (Object.prototype.hasOwnProperty.call(base, k)) out[k] = base[k];
    if (patch) for (var p in patch) if (Object.prototype.hasOwnProperty.call(patch, p)) out[p] = patch[p];
    return out;
  }

  var factCache = {};

  window.BiolingoI18n = {
    languages: [
      { code: "en", label: "English" },
      { code: "es", label: "Español" }
    ],

    getLang: function() { return current; },

    setLang: function(lang) {
      current = (lang === "es") ? "es" : "en";
      factCache = {};
      try { localStorage.setItem(STORAGE_KEY_LANG, current); } catch (e) {}
      this.applyStatic();
    },

    // Reads persisted language (before game state loads) to avoid an English flash
    initFromStorage: function(stateLang) {
      var lang = stateLang;
      if (!lang) {
        try { lang = localStorage.getItem(STORAGE_KEY_LANG); } catch (e) {}
      }
      current = (lang === "es") ? "es" : "en";
      factCache = {};
      this.applyStatic();
    },

    t: function(key, params) {
      var str = dictFor(current)[key];
      if (str === undefined) str = EN[key];
      if (str === undefined) str = key;
      if (params) {
        str = str.replace(/\{(\w+)\}/g, function(m, name) {
          return params[name] !== undefined ? params[name] : m;
        });
      }
      return str;
    },

    // Translate static markup carrying data-i18n / data-i18n-attr hooks
    applyStatic: function() {
      var self = this;
      if (typeof document === "undefined") return;
      document.documentElement.setAttribute("lang", current);
      document.title = self.t("meta.title");
      var desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", self.t("meta.description"));
      document.querySelectorAll("[data-i18n]").forEach(function(el) {
        el.textContent = self.t(el.getAttribute("data-i18n"));
      });
      document.querySelectorAll("[data-i18n-aria]").forEach(function(el) {
        el.setAttribute("aria-label", self.t(el.getAttribute("data-i18n-aria")));
      });
    },

    level: function(lvl) {
      var o = overlay("levels");
      return o && o[lvl.levelId] ? copyWith(lvl, o[lvl.levelId]) : lvl;
    },

    unit: function(unit) {
      var o = overlay("units");
      return o && o[unit.id] ? copyWith(unit, o[unit.id]) : unit;
    },

    lesson: function(lesson) {
      var o = overlay("lessons");
      return o && o[lesson.id] ? copyWith(lesson, o[lesson.id]) : lesson;
    },

    badge: function(b) {
      var o = overlay("badges");
      return o && o[b.id] ? copyWith(b, o[b.id]) : b;
    },

    questDesc: function(q) {
      return this.t("quests." + q.id) !== ("quests." + q.id) ? this.t("quests." + q.id) : q.desc;
    },

    fact: function(fact) {
      if (current !== "es") return fact;
      if (factCache[fact.id]) return factCache[fact.id];
      var tr = window.I18N_ES_FACTS && window.I18N_ES_FACTS[fact.id];
      var out = tr ? copyWith(fact, tr) : fact;
      if (tr && fact.type === "diagram") out.diagramKey = fact.targetLabel;
      factCache[fact.id] = out;
      return out;
    }
  };
})();
