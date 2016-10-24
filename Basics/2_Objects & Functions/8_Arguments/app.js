// if you are looking through any modern code you will see the 'arguments' variable
// 'arguments' contains a list of all the values that you pass to a function
// it is automatically created by the javascript engine for every execution context

function greet(firstname, lastname, language) {
 
    // if language is not passed, default to en
    language = language || 'en'; // this works because 'language' comes in as undefined, which then coerces to false
    
    // check for missing parameters (see app2 for more elaborate solution)
    if (arguments.length === 0) { // now we can do something special depending on how many arguments are passed in
        console.log('Missing parameters!');
        console.log('-------------');
        return;
    }
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    // console.log(arguments); // keyword that is automatically available to us
    // console.log('arg 0: ' + arguments[0]); // we can ask for an argument at a given index
    console.log('-------------');
}

greet(); // I can do this in JS with no error...all the arguments will come back 'undefined' because of hoisting
greet('John'); // Will be processed left to right, so it assumes that 'John' is firstname
greet('John', 'Doe'); // Can pass only part of the list of parameters, will have 'en' for language with default parameter
greet('John', 'Doe', 'es'); // All arguments passed and 'es' will be language

// in ES6 I can do:  function greet(firstname, ...other)
// and 'other' will be an array that contains the rest of the arguments