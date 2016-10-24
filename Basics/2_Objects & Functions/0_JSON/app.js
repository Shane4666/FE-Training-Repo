// On Shopping Tools, we will be processing a lot of JSON, running logic on it, and outputting it to our UI's

// JavaScript Object Notation: a syntax for serializing objects, arrays, numbers, strings, booleans, and null
// It is based on JavaScript syntax but is not JavaScript

var objectLiteral = {
    firstname: "Mary",
    isAProgrammer: true
}

var json = '{ "firstname": "Mary", "isAProgrammer": true }';

// JSON object contains two methods: 
//  - one for converting values to JSON
//  - and one for parsing JSON


var stringified = JSON.stringify(objectLiteral);
console.log("stringify: ", stringified);

var parsed = JSON.parse(json);
console.log("parse: ", parsed);

// once we parse the json, it turns into meaningful javascript code that we can do work on
console.log(parsed.firstname);