// //Looping.

// const person = {
//     name: "Mayur",
//     tech: "Flutter",
//     height: "6"
// } 

// const keysOfPerson = Object.keys(person);

// for(let index=0; index < keysOfPerson.length; index++){
//     console.log(person[keysOfPerson[index]]);
// }

// const numbers = [1,2,3,4,5];
// const name = "Mayur";

// for(const number in numbers){
//     console.log(numbers[number]);
// }

// for(const number of numbers){
//     console.log(number);
// }

// for(const character in name){
//     console.log(name[character]);
// }

// for(const character of name){
//     console.log(character);
// } 

// for(const key in person){
//     console.log(person[key]);
// }

// // for(const key of person){ //Object is not iterable
// //     console.log(person[key]);
// // }
// // console.log(greetings());

// const greet = (name) => {
//     console.log(this);
//     return `Hey, ${name}`
// }

// console.log(greet("Mayur"));
// function greetings(name){
//     console.log(this);
//     return `Hey, ${name}`; 
// }

// console.log(greetings("Mayur"));

// const greeting = greetings("Mayur");
// console.log(typeof greeting);
// console.log(greeting());

function squareANumber(number){
    return Math.pow(number, 2)
}

const squaringNumber = (number) => Math.pow(number, 2);


console.log(squareANumber(2));
console.log(squaringNumber(2));

//FirstClass Citizen
//why does void prints undefined