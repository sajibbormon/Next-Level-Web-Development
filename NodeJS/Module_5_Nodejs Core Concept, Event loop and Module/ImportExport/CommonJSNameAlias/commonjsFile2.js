// let x = require('./commonjsFile1')

// console.log(x);


// lets import the variable using destructuring

let {b: x} = require('./commonjsFile1'); // receiving b and renaming as x from file 1;
let {b: y} = require('./commonjsFile3'); // receiving b and renaming as y from file 3;


let addition = require('./utility/add');
let subtraction = require('./utility/sub');

console.log(x, y);


console.log("Addition: ",addition(x, y));


//suppose there are thousands of function declared in utility then we need to write that thousands of line to require them. to overcome this problem we can create a index.js file inside the utility where we will import everything together inside the index.js

let {add: additionFunction, sub: subtractionFunction} = require('./utility'); // require all functions using single line

console.log("New Addition: ", additionFunction(x, y));

//also we can require one function if needed.

const {add: additionFunction1} = require('./utility');

console.log("New Addition 2: ", additionFunction1(x, y));

