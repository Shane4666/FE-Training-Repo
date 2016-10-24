/* Hints for debugging JavaScript in Chrome
    - Step through code to observe issues before or while they happen and test out changes through live editing.
    - Prefer stepping over console logging, as logged data is already stale the moment it arrives in the console.
    - Use named functions rather than anonymous ones to improve call stack readability.
*/

// Elements, Console, Sources Tabs
console.log('something');
alert('red');

// Run code in browser, put breakpoint on data variable
function getData() {
    var data = document.getElementById('name').value;
    var out = document.getElementById('dataSpan');
    out.innerHTML = data;
}

// Event Listener Breakpoints
//
// Remove the breakpoint then go to the right side of the screen
// Select Mouse -> Click then click the Get Input Data button
// We can still step through code this way

// Debugger keyword instead of breakpoints
function getData() {
    debugger;
    var data = document.getElementById('name').value;
    var out = document.getElementById('dataSpan');
    out.innerHTML = data;
}

// Show use of snippets tab
// Show use of timeline tab