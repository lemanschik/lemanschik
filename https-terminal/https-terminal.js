const isServiceWorkerContext = !globalThis.window;

isServiceWorkerContext) &&
  self.addEventListener('fetch', (event) => {
    event.respondWith(caches.open(cacheName).then((cache) => {
          cache.match(event.request).then((cacheResponse) => {
             fetch(event.request).then((networkResponse) => {
                cache.put(event.request, networkResponse)
             })
             return cacheResponse || networkResponse
          })
      })
    )
  });
