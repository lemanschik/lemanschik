//// [tests/cases/compiler/duplicateConstructSignature.ts] ////

//// [duplicateConstructSignature.ts]
interface I {
    (): number;
    (): string;
}

//// [duplicateConstructSignature.js]
