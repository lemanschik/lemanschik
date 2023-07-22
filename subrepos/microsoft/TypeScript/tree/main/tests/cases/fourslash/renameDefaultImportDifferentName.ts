/// <reference path='fourslash.ts' />

// @Filename: B.ts
////[|export default class /*1*/[|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 0 |}C|] {
////    test() {
////    }
////}|]

// @Filename: A.ts
////[|import /*2*/[|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 2 |}B|] from "./B";|]
////let b = new [|B|]();
////b.test();

const [CDef, C, B0Def, B0, B1] = test.ranges();
const bRanges = [B0, B1];

verify.baselineCommands(
    { type: "findAllReferences", markerOrRange: ['1', '2'] },
    { type: "findRenameLocations", markerOrRange: C },
    { type: "findRenameLocations", markerOrRange: bRanges },
    { type: "documentHighlights", markerOrRange: "1" },
);
