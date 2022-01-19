 //BASICS
 //alert ("I'm JavaScript!");

 /*let admin;
 let name = 'John';
 admin = name;
 alert(admin);*/

 /*let age = prompt('How old are you?', 28);
 alert(`You are ${age}years old!`);*/

 // SWITCH CASE
/* let isBoss = confirm("Are you their boss?");
 switch(isBoss) {
 case false:
     alert("You are not the boss!");
    break;
 case true:
    alert("Hi boss, glad to see you");
    break;
 }*/

 // CONDITIONAL OPERATOR '?'
 /*let age = prompt('What is your age?', 0);
 let response = (age < 3) ? alert('Infant!') : alert('Not infant');*/

 /*The name of Javascript
 let ans = prompt('What is the official name of JavaScript?', 'js');
 let result = (ans != 'ECMAScript') ? 'You do not know? It is ECMAScript' : 'Right';
 alert(result);8?*/

/*Show the sign
 let num = prompt('Enter a number', 0);
 if (num > 0) {
     alert ('1');
 } else if (num < 0) {
     alert ('-1')
 } else {
    alert ('0')
 };*/

// let result = (a + b < 4) ? 'Below' : 'Over';

/*let message = (login == 'Employee') ? 'Hello' :
(login == 'Director') ? 'Greetings' :
(login == ' ') ? 'No login':
' ' ;*/

/*Doesn't run why?
let age = +prompt('What is your age', 0);

if (age >= 14 && age <= 90) {
    return true
} else {    
    return false
};*/

//IF-ELSE
/*let user = prompt('Who is there?', 'User');
if ( user == 'Admin') {
    let pass = prompt('Password?', 'Password');

    if ( pass === 'TheMaster') {
        alert ('Welcome!');
    } else if ( pass == ' ' || pass == null) {
        alert ('Canceled');
    } else {
    alert ('Wrong password')
    }
} else if ( user == ' ' || user == null) {
    alert ('I do not know you')
} else {
    alert('Canceled')
}*/

/*let sum = 0;
while (true) {
    let value =  +prompt('Enter a number', ' ');

    if(!value) break;
    sum += value;
}
alert('The sum is: ' + sum);*/

/*for ( let i = 0; i <= 10; i++) {
    if (i % 2 != 0)  continue;

    alert( )
}*/

/*if (browser === 'Edge') {
    alert ("You've got the edge!");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert ("Olay we support these browsers too");
} default {
    alert ("We hope that this page looks okay!");
}*/

/*let a = +prompt('a?', '');

switch(a) {
    case '0':
        alert (0);
        break;

    case '1':
        alert (1);
        break;
    
    case '2':
    case '3' :
        alert ('2,3');
        break;
}*/

/*function checkAge(age) {
    return (age>18) ? true : confirm('Did parents allow you?');
}

OR

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?'); // returns first falsy value
}*/

/*function min(a,b) {
    if (a !== b) {
    return (a > b) ? alert(a + 'is bigger') : alert(b + 'is bigger'); 
    } else { alert (a + 'is equal to ' + b);}
}

alert(min(3,3));*/

/*let x = +prompt('Enter x: ','');
let n = +prompt('Enter n','');

function pow(x,n) {
    return x**n;
}

alert(pow(x,n));*/

/*function sayHi() {
    alert( "Hello");
}

alert( sayHi() );*/

/*function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no();

    function showOk() {
        alert('You said yes!');
    }
 
    function showCancel() {
        alert ('You said no!');
    }
}

ask("Do you agree?", showOk, showCancel);*/

/*let age = prompt('What is your age?','');

let welcome = (age > 18) ?
function() { alert ('Hello!');}:
function() { alert ('Adios!');};

let welcome = (age > 18) ?
() => alert ('Hello!'):
() => alert ('Adios!');

welcome();*/

//ARROW FUNCTION
/*let funcName = (arg1, arg2, ..., argN) = expression; */
/*let sum = (a,b) => (a + b);
alert (sum(3,7));*/ //multiple parameters

// let sum = x => x^2;  single parameter
// let sayHi = () => alert ('Hi!'); No parameters

//let ask(question, yes, no) => (confirm(question)) ? yes : no;
/*function ask(question,yes,no) {
    if(confirm(question)) yes();
    no();
}

ask("Do you agree?",
() => alert('You agreed'),
() => alert('You cancelled the execution')
);

alert(ask);*/

/*function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt('x?','');
let n = prompt('n?','');

if (n <= 0) {
    alert(`Power ${n} is not supported,
        please enter an integer number greater than zero`);
} else {
    alert( pow(x, n) )
}*/

// SPEC
describe("pow", function() {
    it("raises x to the n-th power", function() {
        assert.equal(pow(2,3), 8);
    });
}
);
