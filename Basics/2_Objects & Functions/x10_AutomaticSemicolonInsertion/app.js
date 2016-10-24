// You may have noticed that semicolons are optional in JS
// this is because the JS engine (syntax parser) reads the "carriage return" character and says "hey wait, you're not allowed to go to the next line without a semicolon"
// but instead of throwing an error, it decides to be a bro and put a semicolon there for us.

// Therefore, semicolons aren't *truly* optional, but you don't want the syntax parser to make that decision for you.
function getPerson() {
    return // without a semicolon after 'robbie', the syntax parser puts the semicolon here
    { // this, however, would not happen if the curly-brace was on the same line as the return...but this causes a lot of confusion
        firstname: 'Robbie'; // vscode is smart enough to know that this is an error, but a lot of editors aren't
    }
}

console.log(getPerson());