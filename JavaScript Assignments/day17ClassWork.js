
//Closure
// const additionOfTwoNumbers = (firstOperand, secondOperand) => firstOperand + secondOperand;


// console.log(additionOfTwoNumbers(2, 4));

// function multiply(number1){
//     const number2 = 10;
//     return function display(number2){
//         return number1 * number2
//     }
//     // return display(number2);
// }

// console.log(multiply(5));

const subtraction = (number1) => {
    const number2 = 10;

    return obj = {
        result: (number1 - number2),
        displayResult: (number2) => number1 - number2
    }
    // return obj.displayResult(number2);
}

console.log(subtraction(11).displayResult(12));



//Today's Assignment: 
// Explore closure and excution context
// Is closure possible in objects and Array.