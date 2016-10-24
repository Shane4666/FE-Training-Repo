// We will be looping through JSON data a lot, so we should know the JSON methods.
// There are two: JSON.stringify & JSON.parse

// Here is a basic example...
var objectLiteral = {
	firstname: 'robbie',
	isAProgrammer: true
}

// stringify is used to turn object into JSON
var stringy = JSON.stringify(objectLiteral)
console.log("stringify", stringy);

// parse is used to turn JSON into object
var jsonValue = JSON.parse(stringy);
console.log("parse:", jsonValue);

for (json in jsonValue) {
	if (jsonValue.hasOwnProperty(json)) { // a check to ensure we are not looping through inherited properties

		var keys = json;
		var values = jsonValue[json];

		console.log("-------------------");
		console.log("keys:", keys);
		console.log("values:", values);
		console.log("-------------------");
	}
}