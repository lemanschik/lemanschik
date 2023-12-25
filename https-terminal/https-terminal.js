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

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(cacheName+".js")
    .then((registration) => {
      registration.addEventListener("updatefound", () => {
        // If updatefound is fired, it means that there's
        // a new service worker being installed.
        const installingWorker = registration.installing;
        console.log(
          "A new service worker is being installed:",
          installingWorker,
        );

        // You can listen for changes to the installing service worker's
        return new Promise(resolve=>(installingWorker.onstatechange = () => resolve(installingWorker));
      });
    })
    .catch((error) => {
      console.error(`Service worker registration failed: ${error}`);
    });
} else {
  console.error("Service workers are not supported.");
}
