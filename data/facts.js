// Biolingo Fact Registry
// Combines all level banks and exposes query and lookup helpers

(function() {
  function localize(list) {
    var i18n = window.BiolingoI18n;
    if (!i18n || i18n.getLang() === "en") return list;
    return list.map(function(f) { return i18n.fact(f); });
  }

  function getCombinedFacts() {
    var hs = window.FACTS_HS || [];
    var ug = window.FACTS_UG || [];
    var ms = window.FACTS_MS || [];
    var phd = window.FACTS_PHD || [];
    return localize([].concat(hs, ug, ms, phd));
  }

  window.FactRegistry = {
    getAll: function() {
      return getCombinedFacts();
    },

    getById: function(id) {
      var all = getCombinedFacts();
      for (var i = 0; i < all.length; i++) {
        if (all[i].id === id) return all[i];
      }
      return null;
    },

    getByUnit: function(unitId) {
      var all = getCombinedFacts();
      return all.filter(function(f) {
        return f.unit === unitId;
      });
    },

    getByLevel: function(levelId) {
      if (levelId === "hs") return localize(window.FACTS_HS || []);
      if (levelId === "ug") return localize(window.FACTS_UG || []);
      if (levelId === "ms") return localize(window.FACTS_MS || []);
      if (levelId === "phd") return localize(window.FACTS_PHD || []);
      return [];
    },

    getByTags: function(tags) {
      if (!tags || !tags.length) return [];
      var all = getCombinedFacts();
      return all.filter(function(f) {
        if (!f.tags) return false;
        return f.tags.some(function(t) {
          return tags.indexOf(t) !== -1;
        });
      });
    }
  };
})();
