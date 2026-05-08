const CACHE_NAME = 'djs-pdf-v4';
const urlsToCache = [
  '/djs-pdf/',
  '/djs-pdf/index.html',
  '/djs-pdf/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
