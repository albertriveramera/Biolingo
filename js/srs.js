// Biolingo Spaced Repetition System (Leitner Algorithm)
// 5 Leitner Boxes for long-term retention of biomedical facts

(function() {
  var DAY_MS = 24 * 60 * 60 * 1000;

  var BOX_INTERVALS_MS = {
    1: 4 * 60 * 60 * 1000,    // 4 hours (immediate recall)
    2: 1 * DAY_MS,            // 1 day
    3: 3 * DAY_MS,            // 3 days
    4: 7 * DAY_MS,            // 7 days
    5: 21 * DAY_MS            // 21 days (mastered)
  };

  window.BiolingoSRS = {
    intervals: BOX_INTERVALS_MS,

    getCardState: function(state, factId) {
      if (!state.srs) state.srs = { cards: {} };
      if (!state.srs.cards) state.srs.cards = {};

      if (!state.srs.cards[factId]) {
        state.srs.cards[factId] = {
          box: 1,
          nextReview: 0,
          reps: 0,
          lapses: 0,
          lastReviewed: 0
        };
      }
      return state.srs.cards[factId];
    },

    recordAnswer: function(state, factId, isCorrect) {
      var card = this.getCardState(state, factId);
      var now = Date.now();
      card.lastReviewed = now;
      card.reps += 1;

      if (isCorrect) {
        card.box = Math.min(5, card.box + 1);
        var interval = BOX_INTERVALS_MS[card.box] || BOX_INTERVALS_MS[5];
        card.nextReview = now + interval;
      } else {
        card.box = 1;
        card.lapses += 1;
        card.nextReview = now; // Due immediately
      }

      return card;
    },

    getDueCards: function(state, availableFactIds) {
      var self = this;
      var now = Date.now();
      if (!availableFactIds || !availableFactIds.length) return [];

      return availableFactIds.filter(function(id) {
        var card = self.getCardState(state, id);
        return card.reps > 0 && card.nextReview <= now;
      });
    },

    getWeakestCards: function(state, availableFactIds, limit) {
      var self = this;
      if (!availableFactIds || !availableFactIds.length) return [];

      var scored = availableFactIds.map(function(id) {
        var card = self.getCardState(state, id);
        // Score: lower box is weaker; higher lapses is weaker
        var weakScore = (card.box * 10) - (card.lapses * 5) + (card.reps === 0 ? 5 : 0);
        return { id: id, card: card, score: weakScore };
      });

      scored.sort(function(a, b) {
        return a.score - b.score;
      });

      var result = scored.slice(0, limit || 10).map(function(item) {
        return item.id;
      });
      return result;
    },

    getBoxDistribution: function(state) {
      var cards = (state.srs && state.srs.cards) || {};
      var counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, total: 0 };
      for (var id in cards) {
        if (cards.hasOwnProperty(id)) {
          var b = cards[id].box || 1;
          counts[b] = (counts[b] || 0) + 1;
          counts.total += 1;
        }
      }
      return counts;
    }
  };
})();
