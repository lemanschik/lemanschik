//// [tests/cases/conformance/esDecorators/classDeclaration/methods/esDecorators-classDeclaration-methods-static.ts] ////

//// [esDecorators-classDeclaration-methods-static.ts]
declare let dec: any;

const method3 = "method3";

class C {
    @dec(1) static method1() {}
    @dec(2) static ["method2"]() {}
    @dec(3) static [method3]() {}
}


//// [esDecorators-classDeclaration-methods-static.js]
var method3 = "method3";
var C = function () {
    var _a;
    var _b;
    var _staticExtraInitializers = [];
    var _static_method1_decorators;
    var _static_member_decorators;
    var _static_member_decorators_1;
    return _a = /** @class */ (function () {
            function C() {
            }
            C.method1 = function () { };
            C["method2"] = function () { };
            C[(_static_method1_decorators = [dec(1)], _static_member_decorators = [dec(2)], _static_member_decorators_1 = [dec(3)], _b = __propKey(method3))] = function () { };
            return C;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(_a, null, _static_method1_decorators, { kind: "method", name: "method1", static: true, private: false, access: { has: function (obj) { return "method1" in obj; }, get: function (obj) { return obj.method1; } }, metadata: _metadata }, null, _staticExtraInitializers);
            __esDecorate(_a, null, _static_member_decorators, { kind: "method", name: "method2", static: true, private: false, access: { has: function (obj) { return "method2" in obj; }, get: function (obj) { return obj["method2"]; } }, metadata: _metadata }, null, _staticExtraInitializers);
            __esDecorate(_a, null, _static_member_decorators_1, { kind: "method", name: _b, static: true, private: false, access: { has: function (obj) { return _b in obj; }, get: function (obj) { return obj[_b]; } }, metadata: _metadata }, null, _staticExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_a, _staticExtraInitializers);
        })(),
        _a;
}();
