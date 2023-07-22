//// [tests/cases/conformance/esDecorators/classDeclaration/accessors/esDecorators-classDeclaration-accessors-nonStaticAbstract.ts] ////

//// [esDecorators-classDeclaration-accessors-nonStaticAbstract.ts]
declare let dec: any;

const method3 = "method3";

abstract class C {
    @dec(11) abstract get method1(): number;
    @dec(12) abstract set method1(value);
    @dec(21) abstract get ["method2"](): number;
    @dec(22) abstract set ["method2"](value);
    @dec(31) abstract get [method3](): number;
    @dec(32) abstract set [method3](value);
}


//// [esDecorators-classDeclaration-accessors-nonStaticAbstract.js]
var method3 = "method3";
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
