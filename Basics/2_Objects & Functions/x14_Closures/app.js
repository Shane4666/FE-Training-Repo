// We're going to skip IIFE's for now and touch on closures
// This topic is notorious in JS and is fundamental for understanding the language

// Here we'll write a function that returns a function
function greet(whattosay) {
   return function(name) {
       // This way, when we invoke greet, we will get a value back that we can invoke again
       console.log(whattosay + ' ' + name);
   }
}

// greet('Hi'); // returns a function, so how do we invoke it?
// greet('Hi')('Robbie'); // like this

// the preferred method is to set a variable equal to the result of the function
var sayHi = greet('Hi'); // now sayHi is the result of calling greet (a function)
sayHi('Robbie'); // then we call sayHi normally

// but did you see what happened there?

// how does the 'sayHi' function still know the value of the whattosay variable?
// it knows because 'whattosay' was wrapped in a closure...

// this means that inner functions still hold references to the memory space of outer functions
// even though the outer function is no longer in the execution stack, the inner function can go up the scope chain and find the variable

// it is because of this behavior that we say that the inner execution context has 'closed in' its outer variables
// it doesn't matter when you invoke a function, the JS engine will make sure that your current function has 
// access to all the variables that it is supposed to have access to...that it's scope is intact

// this allows for a lot of flexibility and interesting coding patterns