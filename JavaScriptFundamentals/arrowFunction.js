
// function sum takes in 2 parameters, a and b and performs operation a + b
let sum = (a,b) => (a + b);
console.log( (sum(3,7)) );

// function pow takes in 1 parameter, x, and performs operation x raised to power 2
let pow = x => x ** 2;  
console.log( (pow(4)) );

function min(a,b) {
    if (a !== b) {
    return (a > b) ? console.log(a + ' is bigger ') : console.log(b + ' is bigger '); 
    } else { console.log(a + ' is equal to ' + b);}
}

console.log(min(3,4));

// function sayHi takes in no parameters and alerts Hi! on the browser
let sayHi = () => alert ('Hi!');


let ask = (question, yes, no) => (confirm(question)) ? yes : no;
// The arrow function above (line 14), executes the same as the function declaration below (line 16 - 19)
function ask1(question,yes,no) {
    if(confirm(question)) yes();
    no();
}

ask("Do you agree?",
() => alert('You agreed'),
() => alert('You cancelled the execution')
);

alert(ask);


function checkAge(age) {
    return (age>18) ? true : confirm('Did parents allow you?');
}
// The arrow function above (line 29 - 31), executes the same as the function declaration below (line 33 - 35)
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?'); // returns first falsy value
}