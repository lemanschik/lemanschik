# Typescript
Has many pros and cons most best is to align ts code bases with js codebases that would use JSDOC annotation
so the allowJS checkJS features to incremental adopt js to ts this would lead to better code
the mainconcepts are 

- do not use none js features of typescript eg unions like enum
- do use types over interfaces replace all interfaces with types and default values most best for type inference without a additional type.
- define default values and objects as const with default values so type inference can work.


## Todo
- create a interface to type transpiller
- inline types if needed as JSDOC. 
- create a rollup plugin that fixes jsdoc imports. if needed.
