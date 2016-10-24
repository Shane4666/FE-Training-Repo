// Variable environment: where a variable live in memory


function b() {
	var myVar; // declare but with no value
    return 'myVar is ' + myVar;
}

function a() {
	var myVar = 2; // declare and set it to 2
	b();
	return 'myVar is ' + myVar;
}

var myVar = 1; // declare again and set equal to 1
a();

// What is the value of myVar at any moment in time?
// Steps:
//	- 'a' is invoked and myVar is 1
//	- within function 'a', myVar is 2
//	- then function 'b' is called and declares myVar as undefined

console.log("window:", myVar);
console.log("invoking a():", a());
console.log("invoking b():", b());

// Point: We have three variables, all named the same thing, all in different variable environments.