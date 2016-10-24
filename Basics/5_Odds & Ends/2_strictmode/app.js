/*
Strict mode makes several changes to normal JavaScript semantics. 
    - First, strict mode eliminates some JavaScript silent errors by changing them to throw errors.

    - Second, strict mode fixes mistakes that make it difficult for JavaScript engines to perform 
      optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.

    - Third, strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.
*/

function logNewPerson() {
    "use strict";
    
    var person2;
    persom2 = {}; // intelligently sees that persom2 is not defined
    console.log(persom2);
}

var person;
persom = {}; // spelled wrong, doesn't matter
console.log(persom);
logNewPerson();