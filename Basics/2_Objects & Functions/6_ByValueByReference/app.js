// note: every function inherits from the object type

// by value (primitives)
var a = 3; // a has an address location where it sits in memory
var b;

b = a; // b points to a new address in memory and the primitive value is copied over
a = 2; // now if we reassign a, b remains the same

console.log(a); // 2
console.log(b); // 3



// All objects and functions in JS interact by reference...

// Objects by reference
var c = { greeting: 'hi' };
var d;

d = c; // references the same space in memory. d and c are not copies of each other.
c.greeting = 'hello'; // mutate.

console.log(c); // hello
console.log(d); // hello


// Function by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate   
}

changeGreeting(d); // passing d to obj, so now mutating obj will mutate c and d
console.log(c); // Hola
console.log(d); // Hola

// equals operator sets up new memory space (new address)

// this is a special case where by reference would not apply...

c = { greeting: 'howdy' }; // setting c equal to a new value, creating a new spot in memory for c to point to
console.log(c); // howdy, because c was reassigned
console.log(d); // hola, because d is still pointing at the old spot in memory