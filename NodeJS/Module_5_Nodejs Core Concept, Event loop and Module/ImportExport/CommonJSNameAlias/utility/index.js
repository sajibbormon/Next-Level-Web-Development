
//suppose there are thousands of function declared in utility then we need to write that thousands of line to require them. to overcome this problem we can create a index.js file inside the utility where we will import everything together inside the index.js

const add = require('./add');
const sub = require('./sub');

// we can combine them together and export them 

module.exports = {add, sub}