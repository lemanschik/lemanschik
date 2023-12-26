const isServiceWorkerContext = !globalThis.window;
const cacheName = "https-terminal";
// cache first so the sender can drain.
isServiceWorkerContext && globalThis.addEventListener('fetch', (event) => {
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

// activate navigationPreload API.
isServiceWorkerContext && globalThis.addEventListener("activate", (event) => {
  event.waitUntil(globalThis.registration?.navigationPreload?.enable() || Promise.resolve());
});

// Installation & Update LifeCycle 
if ("serviceWorker" in navigator) {
navigator.serviceWorker.register("./"+cacheName+".js").then(
  (registration) => registration.addEventListener("updatefound", () => {
      const installingWorker = registration.installing;
      console.log(
        "A new service worker is being installed:",
        installingWorker,
      );
      // You can listen for changes to the installing service worker's
      //return new Promise(resolve=>(installingWorker.onstatechange = () => resolve(installingWorker));
      navigator.serviceWorker.ready.then(
        (registration) => registration.navigationPreload.getState()
      ).then((state) => {
        console.log(state.enabled); // boolean
        console.log(state.headerValue); // string
        
      });
    })).catch((error) => {
      console.error(`Service worker registration failed: ${error}`);
    });
} else {
  console.error("Service workers are not supported.");
}
