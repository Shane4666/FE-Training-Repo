// The sort() method sorts the elements of an array in place and returns the array.


// strings
var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

console.log(fruit);


// numeric
var numbers = [4,6,2,3,1,5];
numbers.sort(function(a,b) {
    return a - b;
});

console.log(numbers);

/* How it works...

function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

*/