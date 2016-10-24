// Fizzbuzz: very basic question that is asked in a surprising amount of interviews
var a = 2, i = 100;

// ternary example
a === 2 ? 'two' : 'forty-two'; // -> 'two' because true

// Fizzbuzz with if/else
(function fizzBuzz () {
    for (; i > 0; --i) {
        if (i % 15 === 0)
            console.log('FizzBuzz');
        else if (i % 3 === 0)
            console.log('Fizz');
        else if (i % 5 === 0  )
            console.log('Buzz');
        else
            console.log(i);
    };
})();

// Fizzbuzz with ternary
while (--i) { // decrement until i is 0 (remember that 0 can == false in JS)
    console.log((i % 3) ? ((i % 5) ? i : 'Buzz') : ((i % 5) ? 'Fizz' : 'FizzBuzz'));
}