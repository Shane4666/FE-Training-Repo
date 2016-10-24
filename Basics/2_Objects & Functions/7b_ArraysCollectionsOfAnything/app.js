// An array is a collection that holds many things inside of it.

// It's worth mentioning both ways of declaring arrays
// var arr = new Array(); // like in C-based languages
// var arr = []; // the preferred way in JS

// You can put whatever you want in an array
var arr = [
    1, // number
    false, // boolean
    { // object literal
        name: 'Robbie',
        address: '111 Main St.'
    },
    function(name) { // function
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    "hello"
];

// this allows for very interesting but useful syntax...

// arr[3](); // invoke the function from the array
arr[3](arr[2].name); // give the function the name from the object literal

// storing functions becomes very useful later on with a concept called "memoization"