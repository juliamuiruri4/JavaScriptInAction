// // Create an empty object
// let user1 = new Object(); //constuctor method or
// let user2 = {}; //object literal
// let key = "likes travelling";


//  // Add properties to the object
// user1 = {
//     name: 'Steve',
//     age: 18,
//     "likes basketball":true, //trailing/hanging comma
// }

// user2["likes swimming"] = true;

// user2[key] = true;


// // Get propoerty values of the object
// //alert(user1.age);

// alert(user2["likes swimming"]);

// alert(key);


// //Delete a value
// delete user1.age;

// delete(user2["likes swimming"]);


// // Computed properties
// let fruit = prompt("Which fruit to buy?", "apple");


// // No limits to property names
// let obj = {
//     let: 2,
//     for: 6,
//     return:4
// };
// alert( obj.for + obj.let + obj.return ); //returns 12

// // In JS, you can access a property even if it does not exist
// let user = {};

// alert( user.noSuchProperty === undefined );

// // Special operator 'in'
// // You can use a variable to store the property
// let myUser = { myName: "Her", myAge: 39 };

// alert("myName" in myUser); //true

// // for .. in loop
// let Game = {
//     Football: "Van",
//     Basketball: "Curry",
//     Tennis: "Serena",
//     Years: 5
// };

// // to print out the property names
// for( let key in Game) {
//     alert(key);
// }

// // to print out the property values
// for(let key in Game) {
//     alert(Game[key]);
// }

// // Integer property values are ordered (printed out in ascending order)
// // Non-integer property values are printed out in order of creation

// // let user = {};
// user.name = "John";
// user.surname = "Smith";

// user.name = "Pete";
// delete user.name;

// // Write a function isEmpty(obj) which returns true if the object has no properties, 
// // if otherwise
function isEmpty(obj) {
    for(key in obj){
        return false;
    }
    return true;
}
console.log(isEmpty());

// // Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// // If salaries is empty, then the result must be 0.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
};
console.log(sum);

// // Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(obj) {
//     for ( let key in obj ) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }
//     }
// }

// // Object - referencing
// let sing = {
//     vocal: "high"
// };

// sing.vocal = "normal"; 

// let song = sing;


// // Cloning objects - Have duplicate objects

// let street = {
//     address: 132,
//     name: "Leviticus"
// };

// let clone = {}; // empty object

// // copies the properties from user to duplicate object
// for( let key in user) {
//     clone[key] = user[key];
// }
// // OR
// // let clone = Object.assign({}, user);


// // Merge (Object.assign)

// Object.assign(street, {address: 456}); // Add or replace the address property of object street
// Object.assign(street, sing); // Add all properties of sing to object street

// // Nested cloning = Properties can be referrences to other objects
// let chalk = {
//     length: 4,
//       color: {
//         light: 'Sky blue',
//         dark: 'Dark Cyan'
//     }
// };
// alert(chalk.color.dark);

// // methods
// let visitor = {
//     id: DJ6gj3
// };

// Create an object calculator with three methods:
// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
    sum() {
        return this.val1 + this.val2;
    },

    mul() {
        return this.val1 * this.val2;
    },

    read() {
        this.val1 = +prompt('Enter value 1: ', 0);
        this.val2 = +prompt('Enter value 2: ', 0);
    }
};

calculator.read();
alert( 'The sum is: ' + calculator.sum() );
alert( 'The product is: ' + calculator.mul() );


// Chaining
let ladder = {
    step:0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() {
        alert( this.step );
        return this;
    }
};
ladder.up();
ladder
    .down();
console.log( ladder.showStep() );
console.log( ladder.up() );
