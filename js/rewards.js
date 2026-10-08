// Biolingo Rewards Engine
// XP, Levels, Streak calculation with Freezes, Combo Multipliers, Daily Quests & Badges

(function() {
  function getTodayString() {
    var d = new Date();
    var month = "" + (d.getMonth() + 1);
    var day = "" + d.getDate();
    var year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  }

  function getYesterdayString() {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    var month = "" + (d.getMonth() + 1);
    var day = "" + d.getDate();
    var year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  }

  var BADGES = [
    { id: "first_spark", title: "First Spark", desc: "Answer your first question correctly", icon: "⚡", tier: "bronze" },
    { id: "perfect_lesson", title: "Flawless Transmission", desc: "Finish a lesson with 100% first-attempt accuracy", icon: "💎", tier: "silver" },
    { id: "combo_5", title: "Synaptic Train", desc: "Reach a 5x combo multiplier", icon: "🔥", tier: "bronze" },
    { id: "combo_10", title: "Synapse Master", desc: "Reach an unstoppable 10x combo streak", icon: "💥", tier: "gold" },
    { id: "streak_3", title: "Hippocampus Hero", desc: "Maintain a 3-day learning streak", icon: "🧠", tier: "bronze" },
    { id: "streak_7", title: "LTP Consolidation", desc: "Maintain a 7-day learning streak", icon: "🌟", tier: "silver" },
    { id: "streak_30", title: "Myelinated Highway", desc: "Maintain a 30-day learning streak", icon: "👑", tier: "gold" },
    { id: "level_5", title: "Biomedical Apprentice", desc: "Reach Player Level 5", icon: "🧪", tier: "bronze" },
    { id: "level_10", title: "Doctoral Candidate", desc: "Reach Player Level 10", icon: "🎓", tier: "silver" },
    { id: "level_20", title: "Principal Investigator", desc: "Reach Player Level 20", icon: "🏛️", tier: "gold" },
    { id: "unit_1_done", title: "Cellular Architect", desc: "Pass the Unit 1 Cellular Checkpoint", icon: "🧫", tier: "bronze" },
    { id: "hs_grad", title: "Secondary Diploma", desc: "Complete all High School units", icon: "🌱", tier: "bronze" },
    { id: "ug_grad", title: "Bachelor of Science", desc: "Complete all Undergraduate units", icon: "🔬", tier: "silver" },
    { id: "ms_grad", title: "Master of Neuropharmacology", desc: "Complete all Master's units", icon: "💊", tier: "silver" },
    { id: "phd_grad", title: "Doctor of Philosophy", desc: "Pass the PhD Defense & conquer Biolingo", icon: "👑", tier: "gold" },
    { id: "srs_master_10", title: "Deep Engram", desc: "Promote 10 facts to Leitner Box 5 (Mastered)", icon: "📚", tier: "silver" },
    { id: "quest_triad", title: "Triad Complete", desc: "Finish all 3 daily quests in a single day", icon: "🎯", tier: "bronze" },
    { id: "skip_champ", title: "Credit by Examination", desc: "Successfully test out of a level via Skip Ahead", icon: "🚀", tier: "silver" },
    { id: "review_pro", title: "Memory Refresh", desc: "Complete a Spaced Repetition Review session", icon: "🔄", tier: "bronze" },
    { id: "speed_synapse", title: "Saltatory Conduction", desc: "Finish a lesson in under 60 seconds", icon: "⚡", tier: "silver" }
  ];

  window.BiolingoRewards = {
    badges: BADGES,

    calculateLevel: function(totalXp) {
      // XP progression formula
      var lvl = 1;
      var xpRemaining = totalXp;
      while (true) {
        var needed = Math.floor(100 * Math.pow(lvl, 1.35));
        if (xpRemaining >= needed) {
          xpRemaining -= needed;
          lvl++;
        } else {
          return {
            level: lvl,
            currentXp: xpRemaining,
            neededXp: needed,
            progressPercent: Math.min(100, Math.floor((xpRemaining / needed) * 100))
          };
        }
      }
    },

    getComboMultiplier: function(comboCount) {
      if (comboCount >= 12) return 3.0;
      if (comboCount >= 9) return 2.5;
      if (comboCount >= 6) return 2.0;
      if (comboCount >= 3) return 1.5;
      return 1.0;
    },

    getQuestionXp: function(comboCount) {
      var mult = this.getComboMultiplier(comboCount);
      return Math.round(10 * mult);
    },

    updateStreakOnStudy: function(state) {
      var today = getTodayString();
      var yesterday = getYesterdayString();
      var streak = state.streak;

      if (streak.lastStudyDate === today) {
        // Already recorded study for today
        return { updated: false, streak: streak.current, savedByFreeze: false };
      }

      var savedByFreeze = false;
      if (!streak.lastStudyDate) {
        streak.current = 1;
      } else if (streak.lastStudyDate === yesterday) {
        streak.current += 1;
      } else {
        // Gap of > 1 day
        if (streak.freezesAvailable > 0 && streak.current > 0) {
          streak.freezesAvailable -= 1;
          savedByFreeze = true;
          streak.current += 1; // Preserved and incremented for today
        } else {
          streak.current = 1;
        }
      }

      streak.lastStudyDate = today;
      if (streak.current > streak.best) {
        streak.best = streak.current;
      }

      // Bonus streak freeze rewarded every 7 days
      if (streak.current > 0 && streak.current % 7 === 0 && streak.freezesAvailable < 2) {
        streak.freezesAvailable += 1;
      }

      return { updated: true, streak: streak.current, savedByFreeze: savedByFreeze };
    },

    checkDailyQuests: function(state) {
      var today = getTodayString();
      if (!state.quests || state.quests.date !== today) {
        state.quests = {
          date: today,
          items: [
            { id: "q_lesson", desc: "Complete 1 Lesson or Checkpoint", target: 1, current: 0, completed: false, xp: 40 },
            { id: "q_questions", desc: "Answer 12 Questions correctly", target: 12, current: 0, completed: false, xp: 50 },
            { id: "q_combo", desc: "Achieve a 5x Combo Streak", target: 5, current: 0, completed: false, xp: 35 }
          ]
        };
      }
      return state.quests.items;
    },

    progressQuest: function(state, questId, amount) {
      var quests = this.checkDailyQuests(state);
      var freshlyCompleted = null;

      quests.forEach(function(q) {
        if (q.id === questId && !q.completed) {
          q.current = Math.min(q.target, q.current + (amount || 1));
          if (q.current >= q.target) {
            q.completed = true;
            freshlyCompleted = q;
            state.stats.xp += q.xp;
          }
        }
      });

      // Check triad achievement
      var allDone = quests.every(function(q) { return q.completed; });
      if (allDone) {
        this.unlockAchievement(state, "quest_triad");
      }

      return freshlyCompleted;
    },

    unlockAchievement: function(state, badgeId) {
      if (!state.achievements) state.achievements = { unlocked: {} };
      if (!state.achievements.unlocked[badgeId]) {
        state.achievements.unlocked[badgeId] = Date.now();
        var badge = BADGES.find(function(b) { return b.id === badgeId; });
        return badge || { id: badgeId, title: badgeId, icon: "🏆" };
      }
      return null;
    },

    checkAllAchievements: function(state) {
      var newlyUnlocked = [];
      var self = this;

      function check(id, condition) {
        if (condition && !state.achievements.unlocked[id]) {
          var b = self.unlockAchievement(state, id);
          if (b) newlyUnlocked.push(b);
        }
      }

      var stats = state.stats;
      var streak = state.streak;
      var prog = state.progress;

      check("first_spark", stats.totalCorrect >= 1);
      check("combo_5", stats.maxCombo >= 5);
      check("combo_10", stats.maxCombo >= 10);
      check("streak_3", streak.current >= 3);
      check("streak_7", streak.current >= 7);
      check("streak_30", streak.current >= 30);
      check("level_5", stats.level >= 5);
      check("level_10", stats.level >= 10);
      check("level_20", stats.level >= 20);
      check("unit_1_done", prog.unitExamPassed && prog.unitExamPassed["u1"]);
      check("hs_grad", prog.unlockedLevels.indexOf("ug") !== -1);
      check("ug_grad", prog.unlockedLevels.indexOf("ms") !== -1);
      check("ms_grad", prog.unlockedLevels.indexOf("phd") !== -1);
      check("phd_grad", prog.completedLessons && Object.keys(prog.completedLessons).indexOf("u12-exam") !== -1);

      // SRS master check
      var srsDist = window.BiolingoSRS ? window.BiolingoSRS.getBoxDistribution(state) : { 5: 0 };
      check("srs_master_10", srsDist[5] >= 10);

      return newlyUnlocked;
    }
  };
})();
