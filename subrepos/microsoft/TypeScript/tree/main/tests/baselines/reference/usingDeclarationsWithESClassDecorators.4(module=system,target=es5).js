//// [tests/cases/conformance/statements/VariableStatements/usingDeclarations/usingDeclarationsWithESClassDecorators.4.ts] ////

//// [usingDeclarationsWithESClassDecorators.4.ts]
export {};

declare var dec: any;

using before = null;

@dec
export default class {
}


//// [usingDeclarationsWithESClassDecorators.4.js]
System.register([], function (exports_1, context_1) {
    "use strict";
    var before, default_1, _default, env_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            env_1 = { stack: [], error: void 0, hasError: false };
            try {
                before = __addDisposableResource(env_1, null, false);
                default_1 = function () {
                    var _classDecorators = [dec];
                    var _classDescriptor;
                    var _classExtraInitializers = [];
                    var _classThis;
                    var default_1 = _classThis = /** @class */ (function () {
                        function default_1() {
                        }
                        return default_1;
                    }());
                    __setFunctionName(_classThis, "default");
                    (function () {
                        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
                        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
                        default_1 = _classThis = _classDescriptor.value;
                        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
                        __runInitializers(_classThis, _classExtraInitializers);
                    })();
                    return default_1 = _classThis;
                }();
                exports_1("default", _default = default_1);
            }
            catch (e_1) {
                env_1.error = e_1;
                env_1.hasError = true;
            }
            finally {
                __disposeResources(env_1);
            }
        }
    };
});
