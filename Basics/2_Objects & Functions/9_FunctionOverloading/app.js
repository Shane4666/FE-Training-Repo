console.log("a:", expression.prop());
console.log("a:", expression.prop());

// JavaScript doesn't have function overloading (same function name but different number of parameters)
function greet(firstname, lastname, language) {

    language = language || 'en';

    if (language === 'en') {
        console.log('Hello, ' + firstname + ' ' + lastname);   
    }

    if (language === 'es') {
        console.log('Hola, ' + firstname + ' ' + lastname);   
    }
}

// create new version of function and call other function inside it
function greetEnglish(firstname, lastname) {
    return greet(firstname, lastname, 'en');
}

// another version of greet but with a default parameter
function greetSpanish(firstname, lastname) {
    return greet(firstname, lastname, 'es');   
}

// now the intended language parameter value is passed for us
greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');

// this is one approach to having simpler function calls
// there are more patterns because we have first class functions
// but this one is simple and expressive