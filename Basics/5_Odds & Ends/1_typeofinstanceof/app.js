// typeof
var a = 3;
console.log(typeof a); // number

var b = "Hello";
console.log(typeof b); // string

var c = {};
console.log(typeof c); // object

var d = [];
console.log(typeof d); // object. weird, right?
console.log(Object.prototype.toString.call(d)); // [object Array] ... better!

console.log(typeof undefined); // makes sense
console.log(typeof null); // object. yes, this is a bug...

var z = function() {};
console.log(typeof z); // function



// instanceof: tells you if an object is down the prototype chain
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var mycar = new Car("Dodge", "Ram", 2004);
var a = mycar instanceof Car;     
var b = mycar instanceof Object; 
var c = mycar instanceof Array; 

console.log("Car?", a); // true
console.log("object?", b); // true
console.log("array?", c); // false
