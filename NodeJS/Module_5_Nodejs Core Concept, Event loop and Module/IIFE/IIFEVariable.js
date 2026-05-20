/**
 * IIFE

    (()=>{
        
        //your function.
        
        }
    )();

An IIFE (Immediately Invoked Function Expression) is a pattern in JavaScript and TypeScript where a function is defined and executed simultaneously. It is commonly used to create a private scope for variables, preventing them from "polluting" the global namespace.

// Standard IIFE
(function() {
  const secret = "I'm hidden!";
  console.log(secret);
})();

// Arrow function variant (Common in modern JS/TS)
(() => {
  console.log("Runs immediately!");
})();


While ES6 modules and block scoping (let/const) have replaced many historical uses of IIFEs, they remain valuable for specific scenarios:

1. Async Contexts: Using await in environments where top-level await is not supported by wrapping code in an async IIFE.
2. Encapsulation: Creating private state or a "singleton" module that executes once and hides its internal logic.
3. Complex Initialization: Computing a value with multiple statements and assigning the result to a single variable or constant.


IIFEs in TypeScript

TypeScript supports IIFEs wherever expressions are allowed. You can add types to an IIFE's parameters and return value just like any other function

const result = ((name: string): string => {
  return `Hello, ${name}!`;
})("User");


** Interestingly, the TypeScript compiler itself uses the IIFE pattern when converting Enums and Classes into JavaScript to manage inheritance and scoping without leaking variables.




 */

var a = 10;  
var a = 20; // declaring second time and assigning a new value.

console.log(a); // it will give 20 as it is assigning the recent value that is declared.


// what if we use let for variable declaration. it will definately throw an error.

let b = 10;
// let b = 20; // error msg: Identifier 'b' has already been declared


//let's do it without error using IIFE

(()=>{
  let b = 20;
  console.log(b);
})();



(()=>{
  let b = 30;
  console.log(b);
})();  // last () means calling the function