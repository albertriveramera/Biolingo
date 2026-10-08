// Biolingo Service Worker (Cache-First Offline Strategy)

var CACHE_NAME = "biolingo-cache-v1";
var ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon.svg",
  "./css/styles.css",
  "./data/curriculum.js",
  "./data/facts_hs.js",
  "./data/facts_ug.js",
  "./data/facts_ms.js",
  "./data/facts_phd.js",
  "./data/facts.js",
  "./js/storage.js",
  "./js/srs.js",
  "./js/rewards.js",
  "./js/audio.js",
  "./js/mascot.js",
  "./js/diagrams.js",
  "./js/questions.js",
  "./js/ui.js",
  "./js/app.js"
];

self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.map(function(k) {
          if (k !== CACHE_NAME) return caches.delete(k);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      return cached || fetch(e.request);
    })
  );
});
