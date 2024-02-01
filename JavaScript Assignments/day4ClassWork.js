console.log(typeof Math.max());
console.log(typeof Math.min());
console.log(Math.max() > Math.min());

// let add = 1 + 'abdcd';
// console.log(add);
// add  = true + true;
// console.log(add);
// add = true + "abcd";
// console.log(add);

// //Random
// //Give a number in the range of 0 and 1 where 0 is inclusive and 1 is exclusive.
// function generateRandomNumber(){
//     console.log(Math.round(Math.random()*10));
// }
// generateRandomNumber();

// //Arithematic operators.
// const operand1 = 25, operand2 = 10;

// //Addition
// console.log(typeof (operand1 + operand2));

// //Subtraction
// console.log(typeof (operand1 - operand2));

// //Multiplication
// console.log(typeof (operand1 * operand2));

// //Division
// console.log(typeof (operand1 / operand2));

// //Modulos
// console.log(typeof (operand1 % operand2));

// //pow
// console.log(typeof (operand1 ** operand2));

// //shortcuts (shortHand Properties);
// let pow  = 2;
// console.log( pow **= 3);

// //Math class funtion



// //To get maximum value in integer -> Number.MAX_VALUE;

// //To parse into a number to string - tofixed() and it take radix as paramater
// //for 2 -> binary, 10 -> decimal, 16 -> Oct.
// const randomNumber = 4334536.53;
// const string = randomNumber.toFixed();
// console.log(string);

// console.log(typeof string);


// //isInteger
// const integer = 35453, float = 21.21;
// console.log(Number.isInteger(integer));
// console.log(Number.isInteger(float))

// //Alternate Way to check if type is number or not
// //Even if pass a number
// console.log(isNaN("3"));
// console.log(Number.isNaN("3"));// The differnce between Number.NaN is that
// //Number.NaN is checking for NaN without parsing and isNaN does by parsing it.

// //isfinite method
// const positiveNumber = 100, negativeNumber = -100;
// console.log(isFinite(positiveNumber));
// console.log(isFinite(negativeNumber));
// console.log(isFinite(0/0));

// //Parsing
// const number = '123', number2 = '1fhds';

// console.log(parseInt(number));
// console.log(parseInt(number2));
// console.log(Number(number));
// console.log(Number(number2));