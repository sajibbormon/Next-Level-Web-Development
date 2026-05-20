/**
 * Commonjs: For bigger project we can not use IIFE again and again. To solve this issue we use commonjs.
 
***CommonJS (CJS) is the traditional module system for Node.js, using require() and module.exports. 
While TypeScript uses modern ES Modules (ESM) syntax (import/export) by default, it is highly flexible and can compile code into CommonJS to ensure compatibility with older Node.js environments.


Feature                             CommonJS (JavaScript)                           TypeScript (Modern Usage)

Import Syntaxconst                  lib = require('lib')                            import lib from 'lib'

Export Syntax                       module.exports = { ... }                        export const ... or export default

Loading                             Synchronous (blocking)                          Asynchronous (typically)

File                                Extensions.js, .cjs                             .ts, .mts, .cts





TypeScript & CommonJS IntegrationT

ypeScript acts as a bridge between these systems through specific configurations:

1. Compilation Target: By setting "module": "CommonJS" in your tsconfig.json, TypeScript will transpile your import statements into require calls for the final JavaScript output.

2. Interoperability: The esModuleInterop flag allows you to import CommonJS modules as if they were ES modules, handling the technical differences between "default" and "named" exports automatically.

3. Native CJS Support: To explicitly write CommonJS in a TypeScript project, you can use the .cts extension, which tells the compiler to always emit CommonJS code regardless of other settings.


When to Use Each

1. Use CommonJS if you are maintaining legacy Node.js applications or working with older libraries that do not yet support ESM.

2. Use TypeScript/ESM for new projects to take advantage of Tree Shaking (removing unused code), better browser support, and the official JavaScript standard.

 */


//lets create a variable and export it using commonjs


let a = 10;

// module.exports = a;

//now let's send a object type

let b = 20;

module.exports = {b};