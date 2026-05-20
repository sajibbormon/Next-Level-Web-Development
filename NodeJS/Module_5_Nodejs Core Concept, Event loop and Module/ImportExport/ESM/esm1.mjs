/**
 * ESM: ECMAScript Modules (ESM) is the official, standardized system for packaging JavaScript code, characterized by its use of import and export statements. While traditional Node.js used CommonJS (CJS) with require(), ESM is now the modern standard across browsers and modern runtimes.
 

Core Concepts

1. Syntax: Uses import { thing } from './file.js' and export const thing = ....

2. File Extensions: In ESM, explicit file extensions (like .js or .mjs) are often mandatory in import paths.

3. Static Analysis: ESM is statically analyzable, allowing tools to perform "tree-shaking" to remove unused code from your final bundle.


**Using ESM in JavaScript

To enable ESM in a standard JavaScript project, you typically have two options:

1. package.json: Add "type": "module" to your package.json file. This tells the runtime to treat all .js files in that directory as ES modules.

2. File Extensions: Use the .mjs extension for ES modules and .cjs for CommonJS modules to override the project default.



**Using ESM in JavaScript

To enable ESM in a standard JavaScript project, you typically have two options:

1. package.json: Add "type": "module" to your package.json file. This tells the runtime to treat all .js files in that directory as ES modules.

2. File Extensions: Use the .mjs extension for ES modules and .cjs for CommonJS modules to override the project default.


**Using ESM in TypeScript

TypeScript has supported ESM syntax for years, but configuring it for a modern ESM-first environment requires specific tsconfig.json settings:

1. module & moduleResolution: Set these to node16 or nodenext to follow Node.js's native ESM resolution rules.

2. File Extensions in Imports: When using nodenext, TypeScript requires you to include the .js extension in your import statements, even though the source file is a .ts file.

3. verbatimModuleSyntax: Introduced in TypeScript 5.0, this flag ensures that your import and export statements are emitted exactly as written, preventing unexpected transformations.


Comparison: ESM vs. CommonJS

Feature                                 ESM                                     CommonJS (CJS)

Keywords                            import / export                           require() / module.exports

Loading                             Asynchronous                              Synchronous

Modernity                           Standardized                              Legacy/Historical

Top-level await                     Supported natively                        Not supported

Metadata                           import.meta.url                           __dirname, __filename






  
 */

let a = 10;

// export default a; // default means exporting only a (nothing can be export except a)

//now let's directly export b without default, (without default we need to use destructuring to import this in other file)

export const b = 20;




