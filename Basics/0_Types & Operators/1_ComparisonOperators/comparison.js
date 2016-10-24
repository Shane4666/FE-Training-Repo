// Comparison Operators & Coercion

console.log(1 < 2 < 3); // true
console.log(3 < 2 < 1); // also true...why?

// To get an idea why, look at the Operator Precedence In JavaScript PDF

// This happens because of "type coercion"
// Meaning that the JS engine will try to automatically figure out a value's type
// In other words, if a statement doesn't make sense to the JS engine, it will try to make sense OF it

// The "less than" symbol is left-to-right associative
// meaning that JS first evaluates 3 < 2 to false
console.log(false < 1);

// Then this value tries to coerce the boolean to a number

// Try ' Number(false) ' in the browser
// False coerces to 0, as where true coerces to 1

console.log(0 < 1);

// I cannot ever see a situation where you would actually write this code, but these concepts are crucial.
// Now we will get into something that you will use every day in your JS code, and that is equality operators.