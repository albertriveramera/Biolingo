// Biolingo Persistence and State Management
// Key: biolingo.save.v1

(function() {
  var STORAGE_KEY = "biolingo.save.v1";

  var defaultState = {
    version: 1,
    profile: {
      name: "NeuroExplorer",
      title: "Novice Synapse",
      createdAt: Date.now(),
      currentLevel: "hs"
    },
    stats: {
      xp: 0,
      level: 1,
      totalCorrect: 0,
      totalAnswered: 0,
      lessonsCompleted: 0,
      maxCombo: 0
    },
    streak: {
      current: 0,
      best: 0,
      lastStudyDate: null, // "YYYY-MM-DD"
      freezesAvailable: 1
    },
    progress: {
      unlockedUnits: ["u1"],
      unlockedLevels: ["hs"],
      completedLessons: {}, // { 'u1-l1': { stars: 3, xpEarned: 110, bestCombo: 6, timestamp } }
      unitExamPassed: {}    // { 'u1': true }
    },
    srs: {
      cards: {} // { [factId]: { box: 1..5, nextReview: timestamp, reps: 0, lapses: 0 } }
    },
    quests: {
      date: null,
      items: []
    },
    achievements: {
      unlocked: {} // { [badgeId]: timestamp }
    },
    settings: {
      soundEnabled: true,
      hapticsEnabled: true,
      theme: "dark"
    }
  };

  var memoryFallbackState = null;
  var isStorageAvailable = true;

  try {
    var testKey = "__biolingo_test__";
    localStorage.setItem(testKey, "1");
    localStorage.removeItem(testKey);
  } catch (e) {
    isStorageAvailable = false;
    console.warn("localStorage not available, using in-memory state fallback.", e);
  }

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function mergeDefaults(saved, defaults) {
    var result = clone(defaults);
    if (!saved || typeof saved !== "object") return result;

    for (var key in saved) {
      if (saved.hasOwnProperty(key)) {
        if (
          saved[key] !== null &&
          typeof saved[key] === "object" &&
          !Array.isArray(saved[key]) &&
          defaults[key] &&
          typeof defaults[key] === "object" &&
          !Array.isArray(defaults[key])
        ) {
          result[key] = mergeDefaults(saved[key], defaults[key]);
        } else {
          result[key] = saved[key];
        }
      }
    }
    return result;
  }

  window.BiolingoStorage = {
    isAvailable: function() {
      return isStorageAvailable;
    },

    load: function() {
      if (!isStorageAvailable) {
        if (!memoryFallbackState) memoryFallbackState = clone(defaultState);
        return clone(memoryFallbackState);
      }

      try {
        var raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
          var initial = clone(defaultState);
          this.save(initial);
          return initial;
        }
        var parsed = JSON.parse(raw);
        return mergeDefaults(parsed, defaultState);
      } catch (e) {
        console.error("Failed to parse saved state from localStorage:", e);
        return clone(defaultState);
      }
    },

    save: function(state) {
      if (!state) return;
      if (!isStorageAvailable) {
        memoryFallbackState = clone(state);
        return;
      }

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (e) {
        console.error("Failed to save state to localStorage:", e);
      }
    },

    reset: function() {
      if (isStorageAvailable) {
        try {
          localStorage.removeItem(STORAGE_KEY);
        } catch (e) {}
      }
      memoryFallbackState = clone(defaultState);
      return clone(defaultState);
    },

    exportJSON: function(state) {
      var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state || this.load(), null, 2));
      var downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      var filename = "biolingo_save_" + new Date().toISOString().slice(0, 10) + ".json";
      downloadAnchor.setAttribute("download", filename);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    },

    importJSON: function(jsonString) {
      try {
        var parsed = JSON.parse(jsonString);
        if (!parsed || typeof parsed !== "object") {
          throw new Error("Invalid JSON structure");
        }
        var merged = mergeDefaults(parsed, defaultState);
        this.save(merged);
        return { success: true, state: merged };
      } catch (err) {
        return { success: false, error: err.message };
      }
    }
  };
})();
