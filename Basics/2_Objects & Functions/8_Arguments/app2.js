function getParamNames(func) {
	return (func + '')
		.replace(/[/][/].*$/mg, '') // strip single-line comments
		.replace(/\s+/g, '') // strip white space
		.replace(/[/][*][^/*]*[*][/]/g, '') // strip multi-line comments  
		.split('){', 1)[0].replace(/^[^(]*[(]/, '') // extract the parameters  
		.replace(/=[^,]+/g, '') // strip any ES6 defaults  
		.split(',').filter(Boolean); // split & filter [""]
}

function greet(firstname, lastname, language) {
	var len = getParamNames(arguments.callee).length; // find alternative for arguments.callee
	if (arguments.length !== len) {
		var arr = [], argsMissing = 0;

		for (var i = 0; i < len; i++) {
			arr.push(arguments[i]);
		}

		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === undefined) {
				console.log("missing parameter: ", getParamNames(arguments.callee)[i]);
				argsMissing++;
			}
		}
		console.log("args missing:", argsMissing);
		console.log("----------------------");
	}
}

greet(); // I can do this in JS with no error...all the arguments will come back 'undefined' because of hoisting
greet('John'); // Will be processed left to right, so it assumes that 'John' is firstname
greet('John', 'Doe'); // Can pass only part of the list of parameters, will have 'en' for language with default parameter
greet('John', 'Doe', 'es'); // All arguments passed and 'es' will be language