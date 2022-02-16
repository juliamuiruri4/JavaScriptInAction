 //BASICS

 let admin;
 let name = 'John';
 admin = name;
 console.log(admin); // John

 // CONCATENATION
 // let age = prompt('How old are you?', 28);
 let age = 28;
 console.log(`You are ${age} years old!`);

 // SWITCH CASE
 // let isBoss = confirm("Are you their boss?");
 let isBoss = true;
 switch(isBoss) {
 case false:
     console.log("You are not the boss!");
    break;
 case true:
    console.log("Hi boss, glad to see you");
    break;
 }

// If-else statement, example 1
 // let num = prompt('Enter a number', 0);
 let num = -5;
 if (num > 0) {
     console.log('1');
 } else if (num < 0) {
    console.log('-1')
 } else {
    console.log('0')
 };

 // If-else statement, example 2
//let user = prompt('Who is there?', 'User');
let user = 'New';
if ( user == 'Admin') {
    // let pass = prompt('Password?', 'Password');
    let pass = 'admin123';

    if ( pass === 'admin123') {
        console.log('Welcome!');
    } else if ( pass == ' ' || pass == null) {
        console.log('Cancelled');
    } else {
        console.log('Wrong password')
    }
} else if ( user == ' ' || user == null) {
    console.log('I do not know you')
} else {
    console.log('Cancelled')
}