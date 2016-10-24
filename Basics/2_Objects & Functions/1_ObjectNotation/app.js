// There are two ways to set and access properties...
//  - Computed Member Access: []
//  - Dot Operator: objName.objProperty

var person = {}; // creates person object

person["firstname"] = "Robbie"; // set first name
person["lastname"] = "Delfs"; // set last name

// as you can imagine, this approach is prone to errors if you misspell the parameters

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]); // can also pass a string

// this is a little better, but still not as readable as the dot operator, so let's take a look at that

console.log(person.firstname); // dot operator: much clearer and easier to type
console.log(person.lastname);

person.address = {};
person.address.street = "111 Main St.";
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.street); // since dot operator has left-to-right associativity, it will evaluate 'person.address' and then evaluate 'street'
console.log(person.address.city);
console.log(person["address"]["state"]); // Computed Member Access is also left-to-right
