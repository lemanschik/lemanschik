/// <reference path="fourslash.ts" />

////class C {
////  [|readonly|] prop: /**/readonly string[] = [];
////  constructor([|readonly|] prop2: string) {
////    class D {
////      readonly prop: string = "";  
////    }
////  }
////}

verify.baselineCommands(
    { type: "documentHighlights" },
    { type: "documentHighlights", markerOrRange: "" },
);