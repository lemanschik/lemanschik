const { TSESTree } = require("@typescript-eslint/utils");
const { createRule } = require("./utils.cjs");

module.exports = createRule({
    name: "jsdoc-format",
    meta: {
        docs: {
            description: ``,
        },
        messages: {
            internalCommentInNonJSDocError: `@internal should not appear in non-JSDoc comment for declaration.`,
            internalCommentNotLastError: `@internal should only appear in final JSDoc comment for declaration.`,
            multipleJSDocError: `Declaration has multiple JSDoc comments.`,
            internalCommentOnParameterProperty: `@internal cannot appear on a JSDoc comment; use a declared property and an assignment in the constructor instead.`,
            misalignedJSDocComment: `This JSDoc comment is misaligned.`,
        },
        schema: [],
        type: "problem",
        fixable: "whitespace",
    },
    defaultOptions: [],

    create(context) {
        const sourceCode = context.getSourceCode();
        const atInternal = "@internal";
        const jsdocStart = "/**";

        /** @type {(text: string) => boolean} */
        function isJSDocText(text) {
            return text.startsWith(jsdocStart);
        }

        /** @type {(c: TSESTree.Comment, indexInComment: number) => TSESTree.SourceLocation} */
        const getAtInternalLoc = (c, indexInComment) => {
            const line = c.loc.start.line;
            return {
                start: {
                    line,
                    column: c.loc.start.column + indexInComment,
                },
                end: {
                    line,
                    column: c.loc.start.column + indexInComment + atInternal.length,
                },
            };
        };

        /** @type {(c: TSESTree.Comment) => TSESTree.SourceLocation} */
        const getJSDocStartLoc = (c) => {
            return {
                start: c.loc.start,
                end: {
                    line: c.loc.start.line,
                    column: c.loc.start.column + jsdocStart.length,
                },
            };
        };

        /** @type {(node: TSESTree.Node) => void} */
        const checkDeclaration = (node) => {
            const blockComments = sourceCode.getCommentsBefore(node).filter(c => c.type === "Block");
            if (blockComments.length === 0) {
                return;
            }

            const last = blockComments.length - 1;
            let seenJSDoc = false;
            for (let i = 0; i < blockComments.length; i++) {
                const c = blockComments[i];
                const rawComment = sourceCode.getText(c);

                const isJSDoc = isJSDocText(rawComment);
                if (isJSDoc && seenJSDoc) {
                    context.report({ messageId: "multipleJSDocError", node: c, loc: getJSDocStartLoc(c) });
                }
                seenJSDoc = seenJSDoc || isJSDoc;

                const indexInComment = rawComment.indexOf(atInternal);
                if (indexInComment === -1) {
                    continue;
                }

                if (!isJSDoc) {
                    context.report({ messageId: "internalCommentInNonJSDocError", node: c, loc: getAtInternalLoc(c, indexInComment) });
                }
                else if (i !== last) {
                    context.report({ messageId: "internalCommentNotLastError", node: c, loc: getAtInternalLoc(c, indexInComment) });
                }
                else if (node.type === "TSParameterProperty") {
                    context.report({ messageId: "internalCommentOnParameterProperty", node: c, loc: getAtInternalLoc(c, indexInComment) });
                }
            }
        };

        /** @type {(node: TSESTree.Node) => void} */
        const checkProgram = () => {
            const comments = sourceCode.getAllComments();

            for (const c of comments) {
                if (c.type !== "Block") {
                    continue;
                }

                const rawComment = sourceCode.getText(c);
                if (!isJSDocText(rawComment)) {
                    continue;
                }

                const expected = c.loc.start.column + 2;
                const split = rawComment.split(/\r?\n/g);
                for (let i = 1; i < split.length; i++) {
                    const line = split[i];
                    const match = /^ *\*/.exec(line);
                    if (!match) {
                        continue;
                    }

                    const actual = match[0].length;
                    const diff = actual - expected;
                    if (diff !== 0) {
                        const line = c.loc.start.line + i;
                        context.report({
                            messageId: "misalignedJSDocComment",
                            node: c,
                            loc: {
                                start: {
                                    line,
                                    column: 0,
                                },
                                end: {
                                    line,
                                    column: actual - 1,
                                }
                            },
                            fix: (fixer) => {
                                if (diff > 0) {
                                    // Too many
                                    const start = sourceCode.getIndexFromLoc({ line, column: expected - 1 });
                                    return fixer.removeRange([start, start + diff]);
                                }
                                else {
                                    // Too few
                                    const start = sourceCode.getIndexFromLoc({ line, column: 0 });
                                    return fixer.insertTextAfterRange([start, start], " ".repeat(-diff));
                                }
                            },
                        });
                        break;
                    }
                }
            }
        };

        return {
            Program: checkProgram,
            ClassDeclaration: checkDeclaration,
            FunctionDeclaration: checkDeclaration,
            TSEnumDeclaration: checkDeclaration,
            TSModuleDeclaration: checkDeclaration,
            VariableDeclaration: checkDeclaration,
            TSInterfaceDeclaration: checkDeclaration,
            TSTypeAliasDeclaration: checkDeclaration,
            TSCallSignatureDeclaration: checkDeclaration,
            ExportAllDeclaration: checkDeclaration,
            ExportNamedDeclaration: checkDeclaration,
            TSImportEqualsDeclaration: checkDeclaration,
            TSNamespaceExportDeclaration: checkDeclaration,
            TSConstructSignatureDeclaration: checkDeclaration,
            ExportDefaultDeclaration: checkDeclaration,
            TSPropertySignature: checkDeclaration,
            TSIndexSignature: checkDeclaration,
            TSMethodSignature: checkDeclaration,
            TSParameterProperty: checkDeclaration,
            PropertyDefinition: checkDeclaration,
            MethodDefinition: checkDeclaration,
        };
    },
});
