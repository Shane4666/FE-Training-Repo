// How can all of this be useful? Well...
var a;

// goes to internet and looks for a value
a = 'hi';

// as long as 'a' exists, the if statement will execute
if (a) {
  console.log('Something is there.');  
}

// the usefulness may not be abundantly clear right now, but it is...
// say that you send an ajax call and expect to receive json back. well if you do get json back, then the body of the 'if' will run
// and if you don't get a response or the request errors out, the 'if' will not evaluate