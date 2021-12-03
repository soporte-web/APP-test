const CACHE_NAME = "APP Unitec";
const urlsToCache = ["/", "style.css", "script/script.js", "imgs/logo.png", "imgs/mask.png"];

self.addEventListener("install", event => {
    // Pre-cache archivos para offline y performance; los pictogramas los dejamos para la primera carga
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache).then( async () => {});
        })
    );
});
// Cache First Policy
self.addEventListener("fetch", event => {
  event.respondWith(
      caches.match(event.request)  
          .then(function(response) {
              if (response) {  // CACHE HIT
                  return response;
              } else {    // CACHE MISS
                  return fetch(event.request);
              }
          })
  );
});