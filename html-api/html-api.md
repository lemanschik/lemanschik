# HTML-API
There was a concept called html import this is the successor of that concept and a solution to cross origin issues
and sharing. The concept is the following we publish and share a api.html file this gets embedded
into a 3thrid party origin the api.html is a bridge to the origin. postMessage and onmesage handlers like a worker

```js
// You can access the result on document
Object.assign(document.createElement('iframe'),{
  src: 'https://thrid.party.origin',
})

window.addEventListener('message',(ev)=>{
  // Do we trust the sender of this message?
  // if (event.origin !== "https://thirdPartyOrigin") { return; }
  // event.source is window.opener
  // event.data is "hello there!"

  // Assuming you've verified the origin of the received message (which
  // you must do in any case), a convenient idiom for replying to a
  // message is to call postMessage on event.source and provide
  // event.origin as the targetOrigin.
  event.source.postMessage(
    "hi there yourself!  the secret response " + "is: rheeeeet!",
    event.origin
  );
})

```

both sides implement the broadcast channel api and use the postmessage only to bridge to the broadcast channel for easyer debbugging

That allows to implement functions by answering questions related to what, who, when, where, why, and how.
