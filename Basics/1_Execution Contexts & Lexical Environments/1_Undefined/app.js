// People often confuse the 'x is not defined' error with undefined

// console.log(notDefined); // not defined (will throw error).
console.log(undefinedVariable); // undefined (not an error).
var undefinedVariable;

//
// only checks for existence. this is the cause of a lot of errors.
//
if (undefinedVariable) { // undefined === false
    console.log('undefinedVariable exists and is defined');
} else {
    console.log('undefinedVariable exists but is undefined');
}

var greeting = 'Hello World!';
console.log('now greeting is both in memory AND intialized:', greeting);

//
// checking for existence and for value
//
if (greeting && greeting !== undefined) {
    console.log('greeting is defined with a value of:', greeting);
} else { 
    console.log('greeting is undefined or does not exist:', greeting);
}

// you may have heard of hoisting, don't do it, declare everything from top to bottom