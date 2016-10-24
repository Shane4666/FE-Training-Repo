// Inside of every execution context, the JavaScript engine always creates two things...
//  - An object
//  - A variable named 'this'
// console.log('window:', window);
// console.log('this:', this);
// in the global context, they are one in the same

// "global" means not inside a function

// go into browser and show these on window object tree
var a = "hello world!";
function b() { }

// writing 'a' and 'window.a' in the console will both print out "hello world!"
console.log('a:', a);
console.log('window.a:', window.a);


// NOTE: Polluting global scope
var hiWorld = 'Hello World!'; // camelCased
var undefinedVar; // still stored but undefined
var first, second = 2, third; // valid syntax
fourth = 4; // can also declare global without 'var'

var expression = function() {} // undefined until you call it
