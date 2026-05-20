// import a from "./esm1.mjs"

// console. log(a);


// without default we need to use destructuring to import anything

import {b} from "./esm1.mjs";

import {b as value} from "./esm1.mjs"; //renaming it using as keyword


console.log(b);
console.log(value);


import {add, sub} from "./utility/index.mjs";

console.log(add(b, b));

