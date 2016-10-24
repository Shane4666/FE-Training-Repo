// Q. Why use Object Literal Lookups over 'Switch' statements?
// A1. Switch is slow, clunky, and prone to difficult debugging errors.
// A2. Object literals are more natural control flow for JS.
// A3. More extensible, easier to test and maintain.
// A4. Faster!

// Switch statement
////////////////////////////////////////////////////////////////
console.time("switch");

var a = 1,
    type = 'coke',
    drink;

switch(type) {
case 'coke':
  drink = 'Coke';
  break;
case 'pepsi':
  drink = 'Pepsi';
  break;
default:
  drink = 'Unknown soda!';
}
console.log(drink);

console.timeEnd("switch");

newLine(); //////////////////////////////////////////////////////

// Object Literal Lookup
////////////////////////////////////////////////////////////////
console.time("object literal lookup");

function getDrink (type) {
  var drinks = {
    'coke': 'Coke',
    'pepsi': 'Pepsi',
    'lemonade': 'Lemonade'
  };
  return 'The drink I chose was ' + (drinks[type] || 'default');
}

var drink = getDrink('pepsi');
console.log(drink);

console.timeEnd("object literal lookup");

newLine(); //////////////////////////////////////////////////////

// Simple Object Literal Lookup (brevity)
////////////////////////////////////////////////////////////////
console.time('alternative');

function getDrink (type) {
  return 'The drink I chose was ' + {
    'coke': 'Coke',
    'pepsi': 'Pepsi',
    'lemonade': 'Lemonade'
  }[type || 'default']; // shortened
}

var drink = getDrink('coke');
console.log(drink);

console.timeEnd('alternative');
////////////////////////////////////////////////////////////////




function newLine() { console.log("\n"); }