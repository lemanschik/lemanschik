//// [tests/cases/conformance/parser/ecmascript5/ArrowFunctionExpressions/parserArrowFunctionExpression4.ts] ////

//// [parserArrowFunctionExpression4.ts]
a = (() => { }, a)

//// [parserArrowFunctionExpression4.js]
a = (function () { }, a);
