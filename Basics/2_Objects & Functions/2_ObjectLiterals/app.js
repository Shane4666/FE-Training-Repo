// Syntax: the first example below is 'literally' the same as the second. Pun intended. Because object literals.
// var person = new Object();
// var person = {};

var robbie = { 
    firstname: 'Robbie', 
    lastname: 'Delfs',
    address: { // property can have another object
        street: '111 Main St.',
        city: 'Chandler',
        state: 'AZ'
    }
};

function greet(person) { // can pass an object as a parameter
    console.log('Hi ' + person.firstname); // then access a property on that object
}

greet(robbie); // Will print "Hi Robbie"

greet({ // creating a new object and passing it to greet()
    firstname: 'Mary', 
    lastname: 'Doe' 
}); // this just shows that you can create on object wherever you want, as you go

robbie.address2 = { // adding a new property using the dot operator
    street: '333 Second St.'
}

