/// <reference path="fourslash.ts" />

//// const object = { foo: 1, bar: 2 }
//// const array = [1, 2]
//// const a = object;
//// const { foo, bar } = object;
//// const {} = object;
//// const b = array;
//// const [ first, second ] = array;
//// const [] = array;

verify.baselineInlayHints(undefined, {
    includeInlayVariableTypeHints: true
});
