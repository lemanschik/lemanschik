//// [tests/cases/conformance/parser/ecmascript5/ArrowFunctionExpressions/parserArrowFunctionExpression2.ts] ////

//// [parserArrowFunctionExpression2.ts]
a = () => { } || a

//// [parserArrowFunctionExpression2.js]
a = function () { };
 || a;
