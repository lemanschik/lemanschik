//// [tests/cases/conformance/parser/ecmascript5/ModuleDeclarations/parserModuleDeclaration5.ts] ////

//// [parserModuleDeclaration5.ts]
module M1 {
  declare module M2 {
    declare module M3 {
    }
  }
}

//// [parserModuleDeclaration5.js]
