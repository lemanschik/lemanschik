const isServiceWorkerContext = !globalThis.window;
const cacheName = "https-terminal";

//https://gist.github.com/jakearchibald/d0b7e65496a8ec362f10739c3e28da6e
const mergeResponses = async (
  responsePromises = [Promise.resolve(new Response())], 
  headers = new Headers()
) => new Response(new ReadableStream({ async start(controller) {
  for await (const response of responsePromises) {
    await response.body.pipeTo(new WritableStream({
      write: (data) => controller.enqueue(data)
    }));
  }
}}),{
  headers: headers.has("Content-Type") ? headers : (await responsePromises[0]).headers
});


// cache first so the sender can drain.
isServiceWorkerContext && globalThis.addEventListener('fetch', (event) => {
  event.respondWith(caches.open(cacheName).then((cache) =>
    cache.match(event.request).then((cacheResponse) =>
      cacheResponse || mergeResponses([]) ||
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
