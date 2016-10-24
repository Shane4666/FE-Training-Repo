// Whitespace: Invisible characters that create literal 'space' in your written code
//  - Carriage returns, tabs, spaces

// Luckily, the JS syntax parser is very liberal with whitespace
//  - This way, we can be more verbose by putting in comments

// a lot of famous libraries and frameworks use a lot of whitespace for this purpose, making it easier for maintainers

var 
    // first name of the person
    firstname, 
    
    // last name of the person
    lastname, 
    
    // the language can be 'en' or 'es'
    language;

var person = {
    // the first name
    firstname: 'John',
    
    // the last name
    // (always required)
    lastname: 'Doe'
}

console.log(person);