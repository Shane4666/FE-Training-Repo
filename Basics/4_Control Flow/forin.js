// The for...in statement iterates over the enumerable properties of an object, in arbitrary order. 
// For each distinct property, statements can be executed.

var obj = { a: 1, b: 2, c: 3 };

for (var prop in obj) {
    console.log("key: ", prop);
    console.log("value: ", obj[prop]);
}


/*** Using 'for...in' incorrectly can cause some issues ***/


// Say that somewhere deep in your JavaScript library...
Array.prototype.foo = 1;

var numbers = [1, 2, 3, 4, 5];
for (var num in numbers) {
    // Now foo is a part of EVERY array and 
    // will show up here as a value of 'num'.
    console.log(num);
}

// To avoid this we can use hasOwnProperty() so that inherited properties are not displayed...
for (var n in numbers) {
    if (numbers.hasOwnProperty(n)) {
        console.log(n);
    }
}

/*** For this reason, 'for...in' should not be used to iterate over an Array where the index order is important. ***/

// but, it is a great way to loop through objects if paired with hasOwnProperty()