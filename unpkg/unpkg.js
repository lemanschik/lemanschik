/** 
 * Implements unpkg as module you can do 
 * unpkg(specifier,options).then(module)
 * Options is mainly to apply filters on large packages so you avoid parsing them complet.
 */
const registryUrl = `https://registry.npmjs.org`;
const storageUrl = `https://npmjs.org/package`;
export unpkg = (specifier, options) => fetch(new URL(specifier,registryUrl).then(r=>r.json()).then(
    registryEntrie => registryEntrie["dist-tags"]["latest"]   //=>  "4.17.21"
).then((version) => fetch(new URL(`${specifier}/v/${version}/index`,storageUrl).then(r=>r.json()).then(
  // {"files":{
  //   "/LICENSE":{
  //      "size":1952,
  //      "type":"File","path":"/LICENSE","contentType":"text/plain",
  //      "hex":"f71e8ed126b46346494aad5486874cd8f0aafe95092ed67d2e3cb6110f939abc",
  //      "isBinary":"false","linesCount":47 }}}
  ({ files }) => {
     Object.entries(files).map(
       (name, fileHandle) => ({
         name, fetch: () => fetch(new URL(`${specifier}/file/${fileHandle.hex}`, storageUrl)),
         ...fileHandle,
         pkgReference: `npm:${specifier}@${version}`,
       })
     )
  }
)
// can also be sha384
// resulting handels allow us to do ${pkgReference}::${hex} keys that map to ${sha512 of the content if hex does not represent that already}
// the resulting tar will always be the same so lets store the tar layout only. to speedup tar creation.
// https://www.npmjs.com/package/@dfns/datamodel/v/5.37.1/index
// https://www.npmjs.com/package/lodash/v/4.17.21/index =>
// {"files":{"/LICENSE":{"size":1952,"type":"File","path":"/LICENSE","contentType":"text/plain","hex":"f71e8ed126b46346494aad5486874cd8f0aafe95092ed67d2e3cb6110f939abc","isBinary":"false","linesCount":47}}}
// hex should be shasum 512 or 256 needs verification 
// https://www.npmjs.com/package/lodash/file/f71e8ed126b46346494aad5486874cd8f0aafe95092ed67d2e3cb6110f939abc
// The above is a flat blob storage as this is not content hash based our job is content hash mapping to pkg file hash 
