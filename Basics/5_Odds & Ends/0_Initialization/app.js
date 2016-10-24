// While working on your apps, you may need to store data into more specific arrays and objects
var peeps = [1,2,3,4];
console.log(peeps);

// initialize people array
var people = [
    {
        // the 'john' object
        firstname: 'John',
        lastname: 'Doe',
        addresses: [
            '111 Main St.',
            '222 Third St.'
        ]
    },
    {
        // the 'jane' object
        firstname: 'Jane',
        lastname: 'Doe',
        addresses: [
            '333 Main St.',
            '444 Fifth St.'
        ],
        greet: function() { // called a "method" because it is a function associated with an object
            return 'Hello!'; // we would call it with people[1].greet();
        }
    }
]

console.log(people);
console.log(people[1].greet());
