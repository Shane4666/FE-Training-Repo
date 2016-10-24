// Having first class functions means that we can implement what's called 'functional programming' where we think and code in terms of functions

// first lets make a simple array
var arr1 = [1,2,3];
console.log("arr1:", arr1);

// task: double each number in arr1 and put it into a new array
var doubled = [];
for (var i = 0; i < arr1.length; i++) {
    doubled.push(arr1[i] * 2);
}
console.log("doubled:", doubled);
// that was a lot of code for such a simple task
// as programmers, we want to minimize the code that we write and make it as reusable as possible

// ... so lets put this into a function that is more expressive and can be reused
function mapForEach(arr, fn) { // remember that we can pass functions, super awesome
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i]) // call a function and pass in the array item
        )
    };
    return newArr;
}

// now we can set arr2 to mapForEach and pass in the arr and fn arguments
var arr1 = [1,2,3];
var arr2 = mapForEach(arr1, function(item) {
   return item * 2;
});
console.log("arr2:", arr2);
// we just cut down on a lot of noise and improved readability

// now we can reuse this function for a lot of different things...
var arr3 = mapForEach(arr1, function(item) {
   return item > 2; // like filtering arrays 
});
console.log("arr3:", arr3); // [false, false, true]


// this is why libraries like underscore and lodash are so powerful...
// they have excellent documentation and you can view their usage at...
// https://lodash.com/
// http://underscorejs.org/