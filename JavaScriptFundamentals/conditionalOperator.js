
 // let age = prompt('What is your age?', 0);
 let age = 2;
 let response = (age < 3) ? console.log('Infant!') : console.log('Not infant'); //if age is less that 3, alert infact, else alert not infant


 // let ans = prompt('What is the official name of JavaScript?', 'js');
 let ans = 'ECMAScript';
 let result = (ans != 'ECMAScript') ? 'You do not know? It is ECMAScript' : 'Right';
 console.log(result);


 let result1 = (2 + 1 < 4) ? 'Below' : 'Over';
 console.log(result1);

 let login = 'Director';
 let message = (login == 'Employee') ? 'Hello' :
(login == 'Director') ? 'Greetings' :
(login == ' ') ? 'No login':
' ' ;
console.log(message);