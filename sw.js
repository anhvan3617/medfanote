self.addEventListener('install', function(event) {
  console.log('[Service Worker] Cài đặt...');
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Kích hoạt');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
