/** Easy to Use Wrapper around Quaternion DB */



// channel.send(data)
// data; may be a string, a Blob, an ArrayBuffer, a TypedArray or a DataView object.

/** @type {RTCDataChannel} */ datachannel
const labels = { 
    connection(/** @type {RTCDataChannel} */ datachannel)  {
        connection.onicecandidate = (candidate) => datachannel.send(JSON.stringify(candidate));
        datachannel.onmessage = (ev) => {
            const signal = JSON.parse(ev.data);
            // Allows to Request current Connection details
            ["get"].includes(signal.method) && 
              ["id","localDescription","remoteDescription"].includes(signal.params[0]) && 
              datachannel.send({ [signal.params[0]]: connection[signal.params[0]] });
            
            // Allows to Update the Connection 
            ["addIceCandidate", "addRemoteSDP","close"].includes(signal.method) && 
              connection[signal.method](...signal.params);
            
            // Setup a total new connection for what ever reason. 
            // This setups a new Connection after a first got Instantiated With a central server
            // To a total new Target that does not need to be the inital remote
            ["PeerConnection"].includes(signal.method) && 
              (connection = Connection(new PeerConnection(...signal.params))); // ID, remoteUrl can in this case be a serviceWorker controled origin.
              // This gets mainly used when we know that the server will soon be not availible anymore or if there are other issues.
              // it proposes a new target or again it self because it knows that you will end on a other server via the loadbalancer.
              // This also implements loadbalancing via the server it can propose a less saturated server or one that is more fast            
        }
        datachannel.onclose = () => connection.close();
    },
    repl(/** @type {RTCDataChannel} */ datachannel) {
        datachannel.onmessage(
            async (fnDefinition)=> datachannel.send(await (new Function(`return ${fnDefinition}`))())
        );
    },
    replStream(/** @type {RTCDataChannel} */ datachannel) {
        
        // you need to manage the datachannel inside your code.
        // eg:
        // const input = new ReadableStream({start(r){ 
        //     datachannel.onmessage = (msg) => r.enqueue(msg); 
        // }});
        
        datachannel.onmessage = async (fnDefinition) => await (
            new Function(`return ${fnDefinition}`)
        )(datachannel);
    },
    httpJson(/** @type {RTCDataChannel} */ datachannel) {
        datachannel.onmessage = (requestInfoJson) => {
            const [ abort, signal ] = [new AbortController()].map(
                (controller) => [()=>controller.abort(), controller.signal]
            );

            const requestInfo = JSON.parse(requestInfoJson);
            requestInfo.body && (requestInfo.body = new Blob([].concat(body)));
            
            const request = new Request(requestInfo, { signal });
            datachannel.onclose = abort;

            if (request.url.startsWith('file://')) {
            
            }
            
            if (request.url.startsWith('devtools://')) {
                
            }
        };
    },
    httpString(/** @type {RTCDataChannel} */ datachannel) {
        // For current spec read https://www.rfc-editor.org/rfc/rfc9110#name-field-order
        datachannel.onmessage = (httpString) => {
            const [requestHead, ...body] = httpString.split('\r\n\r\n');
            const [requestLine, ...headerLines] = requestHead.split('\n');
            const [method, pathname, httpVersion] = requestLine.trim().split(' ');
            
            // [[headerName,content], [headerName,content]]
            const arrayHeaders = headerLines.filter(
                (notUndefined) => notUndefined
            ).map(
                (line) => line.split(':').map((part) => part.trim())
            ).map(
                ([name, ...rest]) => [name, rest.join(' ')]
            );
            const getHeaderByName = (headerName="") => arrayHeaders.find(
                ([name=""]) => name.toLowerCase() === headerName
            )[1];
            
            const url = new URL(pathname, `http://${getHeaderByName('host')}`)
            
            // const rawHeaders = arrayHeaders.flatten();
            
            return { method,pathname,httpVersion, url/*rawHeaders*/, arrayHeaders, body };
        }
    }
};

/** @type {RTCPeerConnection[]} */
export const connections = [];

// Server
const onConnection = async (offer, postMessage) => {
    const connection = connections[connections.push(new RTCPeerConnection(globalThis.crypto.randomUUID()))];
    await connection.remoteDescriptionAdd(offer);
    await connection.setLocalDescription(await connection.createAnswer());
    postMessage(JSON.stringify(connection.localDescription));
    
    // Supported Protocols connection, httpJson, httpString, repl
    connection.on('datachannel',(channel)=> {
        if (
            // Example exclude repl ev.channel.label !== 'repl'
            labels[ev.channel.label]
        ) {
            labels[ev.channel.label](ev.channel)
            return;
        }
    });
}

// the the localInformation from the client.
const httpServer = (req) => {
    onConnection(decodeURI(req.params.sdp),req.response.send);
}

export const acceptFileChannels = (ev) => { // Accept file requests
    if (ev.channel.label.startsWith('file://')) {
        
        // serve the file from your storage locations via
        
        if (!fileStats) { // NotFound
            return ev.channel.close();
        }
        
        ev.channel.send({ fileStats });
        
        for (const chunk of chunks||[]) {
            ev.send(...chunks);
        }
        
    }
}

// Client "UDP/DTLS/SCTP" (UDP carrying DTLS carrying SCTP) or "TCP/DTLS/SCTP" (TCP carrying DTLS carrying SCTP).
const HttpInitConnection = async (
    /** @type {RTCPeerConnection} */ connection = new RTCPeerConnection(globalThis.crypto.randomUUID()),
    remoteUrl = import.meta.url
) => {
    connection.ondatachannel = (ev) => {
        if (labels[ev.channel.label]) {
            labels[ev.channel.label](ev.channel)
        }

    }
    
    // creates the offer
    const channel = connection.createDataChannel("connection");
    
    connection.onicecandidate = (candidate) => channel.send(candidate); 
    
    // shortcut for createOffer setLocalDescription(offer) 
    await connection.setLocalDescription();
    
    // const [,identity,version] = getSessionDescription(connection);
    // const getSessionDescription = ({localDescription:{sdp}}) => sdp.slice(sdp.indexOf('o='),sdp.indexOf(' IN ')).split(' ');
    
    // Offer if you want to exclude tracks and or other stuff from the offer you need to add code here.
    remoteUrl && await fetch(new URL(`?="${
        encodeURI(JSON.stringify(connection.localDescription))
    }"`,remoteUrl)).then(r=>r.json()).then(answer=>{
        connection.setRemoteDescription(answer);
        // now all logic happens in ondatachannel.
    });
 
    return connection;
}

// Examples usage
HttpInitConnection(undefined,yourhostUrl).then(connection=>{
    const esar = []; // ESAR the ECMAScript Archive Format the first entry in the array describes the rest of the array.
    // "UDP/DTLS/SCTP" (UDP carrying DTLS carrying SCTP) or "TCP/DTLS/SCTP" (TCP carrying DTLS carrying SCTP).
    const channel = connection.createDataChannel('file://mypackage.tgz')
    channel.onmessage = (msg) => esar.push(msg);
    return new Promise(resolve => (channel.onclose = () => resolve(esar)));
})


HttpInitConnection(undefined,yourhostUrl).then(connection=>{
  
    // "UDP/DTLS/SCTP" (UDP carrying DTLS carrying SCTP) or "TCP/DTLS/SCTP" (TCP carrying DTLS carrying SCTP).
    const channel = connection.createDataChannel('repl')
    // logs: `This Message Gets Returned its a Echo Example ` + fsStat result
    channel.onmessage = (msg) => console.log(msg);
    
    channel.send(`${async () => {
        return `This Message Gets Returned its a Echo Example ${(await import('node:fs')).fstat(1)}`
    }}`);

    return new Promise(resolve => (channel.onclose = () => resolve()));
})
