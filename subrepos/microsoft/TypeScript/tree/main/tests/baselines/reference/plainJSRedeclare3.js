//// [tests/cases/conformance/salsa/plainJSRedeclare3.ts] ////

//// [plainJSRedeclare.js]
const orbitol = 1
var orbitol = 1 + false
orbitol.toExponential()


//// [plainJSRedeclare.js]
var orbitol = 1;
var orbitol = 1 + false;
orbitol.toExponential();
