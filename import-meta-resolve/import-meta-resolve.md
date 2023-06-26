# Import Meta Resolve is the new universal Handler to resolve relativ urls
as also the new require.resolve replacement in nodejs
it can only be used in module context and it crashes node 20+ at present

```js
export const resolve = (specifier) => import.meta.resolve(specifier,new URL('../',import.meta.url))
```

leads to segfault for obvious reasons :D but is valid.
