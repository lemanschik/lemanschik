//// [tests/cases/compiler/typeofImportInstantiationExpression.ts] ////

//// [input.ts]
// @strict

// Repro from #52248

interface Arg<T = any, Params extends Record<string, any> = Record<string, any>> {
    "__is_argument__"?: true;
    meta?: T;
    params?: Params;
}

export function myFunction<T = any, U extends Record<string, any> = Record<string, any>>(arg: Arg<T, U>) { return (arg.params || {}) as U }

//// [main.ts]
type T1 = typeof import('./input.js').myFunction;
type T2 = typeof import('./input.js').myFunction<any, { slug: 'hello' }>;


//// [input.js]
"use strict";
// @strict
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFunction = void 0;
function myFunction(arg) { return (arg.params || {}); }
exports.myFunction = myFunction;
//// [main.js]
