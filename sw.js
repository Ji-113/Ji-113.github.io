// Cache name
const CACHE_NAME = 'pwa-sample-caches-v1';
// Cache targets
const urlsToCache = [
  './',
  './index.html',
  './stopwatch/index.html',
  './timer/index.html',
  './alarm/index.html',
  './clock/index.html',
  './countdown/index.html',
  './link/index.html',
  './memo/index.html',
  './form/index.html',
  './countdown/j-third-grade.html',
  './countdown/Seiga-festival.html',
  './css/style.css',
  './images/a.jpg',
  './images/b.jpg',
  './images/c.jpg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response ? response : fetch(event.request);
      })
  );
});
