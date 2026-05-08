const CACHE_NAME = 'djs-pdf-v3'; // 버전 변경 필수
const urlsToCache = [
  '/djs-pdf/',
  '/djs-pdf/index.html',
  '/djs-pdf/manifest.json',
  '/djs-pdf/icon.png'
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
