//// [tests/cases/conformance/es6/unicodeExtendedEscapes/unicodeExtendedEscapesInStrings14_ES5.ts] ////

//// [unicodeExtendedEscapesInStrings14_ES5.ts]
// Shouldn't work, negatives are not allowed.
var x = "\u{-DDDD}";


//// [unicodeExtendedEscapesInStrings14_ES5.js]
// Shouldn't work, negatives are not allowed.
var x = "\u{-DDDD}";
