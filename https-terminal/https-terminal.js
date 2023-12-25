const isServiceWorkerContext = !globalThis.window;
const cacheName = "https-terminal";
isServiceWorkerContext) &&
// cache first so the sender can drain.
globalThis.addEventListener('fetch', (event) => {
  event.respondWith(caches.open(cacheName).then((cache) =>
    cache.match(event.request).then((cacheResponse) =>
      cacheResponse ? cacheResponse :
      fetch(event.request).then((networkResponse) => {
        cache.put(event.request, networkResponse.clone());
        return networkResponse;
      }) 
    )
  ))
});

