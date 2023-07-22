/// <reference path='fourslash.ts' />

// @Filename: foo.ts
////export type /*def0*/T = string;
////export const /*def1*/T = "";

// @Filename: bar.ts
////import { T } from "./foo";
////let x: [|/*reference*/T|];

verify.baselineCommands(
    { type: "goToType", markerOrRange: "reference" },
    { type: "goToDefinition", markerOrRange: "reference" },
);