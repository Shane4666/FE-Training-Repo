var colors = ['red', 'blue', 'green'];

// We could do this...but it is prone to tiny mistakes.
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// But this is more readable code...

colors.forEach(function (color) {
    console.log(color);
});


// Pitfall: forEach() does not support break. Use every() when you want the option to break out of loop.
function breakAtEmptyString(arr) {
    arr.every(function (elem) {
        if (elem.length === 0) {
            return false; // break
        }
        console.log(elem);
        return true; // don’t forget!
    });
}