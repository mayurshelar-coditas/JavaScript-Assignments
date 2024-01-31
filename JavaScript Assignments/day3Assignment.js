// Create a file and declare variables and assign string, boolean, undefined and null data types
const firstName = "Mayur"; //String 
const isMarried = false; //Boolean
let speaksFrench; //As it is not a good practice to explicitly assign undefined we not using const for declaration.
const yearsOfExperience = null; //null - For null also it not a good practice to explicitly assign it.
const age = 21; //Number  
const lastName = Symbol("Shelar"); // Symbol

// Create file and use the JavaScript typeof operator to check different data types. Check the data type of each variable.

//typeof is an operator and not a function altouth we can write paranthesis after typeof but it not considered a good practice.

console.log(typeof firstName); 
console.log(typeof isMarried);
console.log(typeof speaksFrench);
console.log(typeof yearsOfExperience);
console.log(typeof age);
console.log(typeof lastName);

//Let us check type of some non-prmitive data types
const personalDetails = ["Mayur", 21]; //this will log object on the console.

console.log(typeof personalDetails);