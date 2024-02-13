//Class Work day 5
//Always use ES6 way.
//Strings.
const name = "Mayur";

const greet = "heyyy"; 

console.log(`${greet}`);

//1st way 

let greeting = `${greet}, ${name}`; //template string or interpolation

console.log(greeting);

//indexing
//Strings are index based.
const message = "Hello";

console.log(message[0]); //Always use [] for indexing a string.
console.log(message.charAt(0)); 

console.log(message.charCodeAt(0)); // TO get ascii value.

//To compare strings -> === >= <=. 
message[0] = 'B';
console.log(message); //As strings are immutabe it won't change.

let string = "Mayur";

let arr = string.split("");

console.log(arr);

let string1 = "JavaScript";


console.log(string1.substr(4, 6)); //It will start from starting index and slice next second Parameter characters.
console.log(string1.substring(1, 6));

//Trim method.
console.log(string1.trim());
// console.log(string1.trimfirst());
// console.log(string1.trimLast());

console.log(string1.indexOf('a'));
console.log(string1.lastIndexOf('a'));

//Slice
console.log(string1.slice(-4));
