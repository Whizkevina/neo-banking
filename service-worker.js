const CACHE_NAME = 'easybank-v1';
const ASSETS = [
  '/',
  '/Neo-banking.html',
  '/style.css',
  '/carousel.js',
  '/site-enhancements.js',
  '/manifest.json',
  'https://via.placeholder.com/192x192.png?text=EB',
  'https://via.placeholder.com/512x512.png?text=EB'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
}); 