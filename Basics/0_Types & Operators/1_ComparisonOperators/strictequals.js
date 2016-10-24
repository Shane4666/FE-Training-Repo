// when it comes to comparing two values, you may want to use a double equals

// NOTE: (probably best to do this portion in the browser)
console.log(3 == 3); // true
console.log("3" == 3) // true

console.log(false == 0) // true

// this can cause strange problems that are hard to debug

// how do we solve this?

// Strict equality: compares two things but doesn't try to coerce the values

// 3 === 3 // true
// "3" === "3" // true
// "3" === 3 // false

// triple equals checks for value AND type

// to drive this point home...
var a = 0;
var b = false;

if (a == b) { // true
    console.log('They are equal!');
} else {
    console.log('Nope, not equal!');
}

if (a === b) { // false, because they are different types
    console.log('They are equal!');
} else {
    console.log('Nope, not equal!');
}

// NOTE: you can always use strict inequality with triple equals... !==

// now that you understand triple equals, it's time to learn about quadruple equals...just kidding.

// use these by default!!!

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness