/* Clearshore Assist — network-first shell cache so the app opens offline. */
var CACHE = "clearshore-assist-v3";
var SHELL = ["/app/", "/app/index.html", "/app/styles.css", "/app/app.js", "/app/skills.js", "/app/manifest.json", "/app/fonts/inter-latin.woff2", "/app/fonts/cormorant-garamond-latin.woff2", "/app/icons/icon-512.png", "/app/icons/maskable-512.png", "/logo.png"];

self.addEventListener("install", function (e) {
  // One missing icon must not fail the whole install, so precache each file on its own.
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return Promise.all(SHELL.map(function (u) { return c.add(u).catch(function () {}); })); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) { return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  if (new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request).then(function (res) {
      // A redirect means the site gate bounced us to /enter — never cache that over the app.
      if (res.ok && !res.redirected) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(e.request).then(function (hit) {
        return hit || (e.request.mode === "navigate" ? caches.match("/app/index.html") : Promise.reject());
      });
    })
  );
});
