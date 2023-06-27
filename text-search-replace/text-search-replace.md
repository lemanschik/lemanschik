# Text Search Replace - CodeMOD Modify and so on
This is a simple text based search replace implementation a bit like the sed util in the unix land.

Getes exported with a Isomorphic shaped Interface compatible to TransformStream implementation and
Rollup Plugin. 

```ts
const searchReplace = import('./text-search-replace/text-search-replace.js').then(({ modify }) => modify({ 
  "search": "replace",
}))

const codeTransformStream = new TransformStream({
  transform(text,task) {
    const modify = await searchReplace;
    task.enqueue(modify(text));
  }
})

// Note that the plugins array supports type Promise so dynamic import is fine.
rollupDefineConfig({ plugins: [searchReplace] })
```
