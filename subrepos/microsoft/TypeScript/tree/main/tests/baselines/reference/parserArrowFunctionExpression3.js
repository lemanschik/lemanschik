//// [tests/cases/conformance/parser/ecmascript5/ArrowFunctionExpressions/parserArrowFunctionExpression3.ts] ////

//// [parserArrowFunctionExpression3.ts]
a = (() => { } || a)

//// [parserArrowFunctionExpression3.js]
a = (function () { }) || a;
