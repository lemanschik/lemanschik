# Text Search Replace - CodeMOD Modify and so on
This is a simple text based search replace implementation a bit like the sed util in the unix land.

Getes exported with a Isomorphic shaped Interface compatible to TransformStream implementation and
Rollup Plugin. 

```ts

import('./text-search-replace/text-search-replace.js').then(({ modify }) => new TransformStream(modify({ "search": "replace" })))

rollupDefineConfig({ plugins: [
  (await import('./text-search-replace/text-search-replace.js')).modify({ "search": "replace" })
] })
```
