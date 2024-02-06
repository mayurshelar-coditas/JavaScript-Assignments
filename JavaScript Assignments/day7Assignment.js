// DAY-10 Assignment

// 1. If user is 18 or older , give feedback: 'You are allowed to Marry' 
//but if not 18 console feedback stating to wait for the number of years he needs to turn 18.
const age = 16;

age >= 18 ? console.log("You are allowed to Marry") : console.log(`Wait for ${18 - age} years`);
//Output ->  Wait for 2 years.



// 2. Compare the values of myAge and yourAge. Based on the comparison and log the result to console stating who is older.
// Enter your age: 30
// You are 5 years older than me.

const myAge = 30;
const yourAge = 35;

myAge > yourAge ? console.log(`I am ${myAge - yourAge} years older than you!`) : console.log(`You are ${yourAge - myAge} years older than me!`);
//Output -> You are 5 years older than me!


// 3. If myAge is greater than yourAge return 'yourAge is greater than myAge '
// else 'myAge is less than yourAge'. Try to implement it in two ways.

//1st method.
if(myAge > yourAge){
    console.log("yourAge is greater than myAge");
} else {
    console.log("myAge is less than yourAge");
} 
//Output -> myAge is less than yourAge

//2nd method
myAge > yourAge ? console.log("yourAge is greater than myAge") : console.log("myAge is less than yourAge");
//Output -> myAge is less than yourAge

// 4. Check, if a number is even or not.
const numberOfDaysLeftForExam = 21;

numberOfDaysLeftForExam % 2 === 0 ? console.log("Even number of days left!") : console.log("Odd number of days left.");
//Output - Odd number of days left.


// 5. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
const score = 82;

if(score >= 0 && score <= 49){
    console.log("F grade");
} else if(score >= 50 && score <= 59){
    console.log("D grade");
} else if(score >= 60 && score <= 69){
    console.log("C grade");
} else if(score >= 70 && score <= 89){
    console.log("B grade");
} else if(score >= 90 && score <=100){
    console.log("A grade");
} else {
    console.log("Invalid Score!");
}
//Output -> B grade

// 6. Check if the season is Rainy, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Rainy.
// December, January or February, the season is Winter.
// March, the season is Spring
// April, May, June, July or August, the season is Summer

const monthOfYear = "October";

    if(monthOfYear === "September" || monthOfYear === "October" || monthOfYear === "November"){
        console.log("Rainy");
    }
    else if(monthOfYear === "December" || monthOfYear === "January" || monthOfYear === "February"){
        console.log("Winter");
    }
    else if(monthOfYear === "March"){
        console.log("Spring");
    }
    else if( monthOfYear === "April" || monthOfYear === "May" || monthOfYear === "June" || monthOfYear === "July" || monthOfYear === "August"){
        console.log("Summer");
    }
    else {
        console.log("Please enter a valid month");
    }
//Output -> Rainy

// 7. Check if a day is weekend day or a working day. Your script will take day as an input.

const dayOfWeek = "Tuesday";
(dayOfWeek === "Saturday" || dayOfWeek === "Sunday") ? console.log("Weekend") : console.log("Working day");
//Output -> Working day

// 8. Write a program which tells the number of days in a month.
if(monthOfYear === "February"){
    console.log("28 days");
} else if(monthOfYear === "January" || monthOfYear === "March" || monthOfYear === "May" || 
   monthOfYear === "August" || monthOfYear === "October" || monthOfYear === "December"){
    console.log("31 days");
} else if( monthOfYear === "April" || monthOfYear === "June" || monthOfYear === "September" || monthOfYear === "November"){
    console.log("30 days");
} 
//Output -> 31 days

// 9. Write a program to check whether the year is leap year or not.
const year = 2001; 
if((year % 4 === 0 && year % 400 === 0) || (year % 100 !== 0)) {  
        console.log(`${year} is a leap year`);  
} else {  
        console.log(`${year} is not a leap year`);  
}  
//Output -> 2001 is a leap year

// 10. Write a JavaScript ternary expression that checks the following conditions:
// If the first condition (condition1) is true, it should check the second condition (condition2). 
// If condition2 is true, set the result to 'A', otherwise set it to 'B'.
// If the first condition (condition1) is false, it should check another condition (condition3). 
// If condition3 is true, set the result to 'C', otherwise set it to 'D'.
let result = age >= 18 ? age >= 30 ? 'A' : "B" :  age >= 24 ? "C" : "D";

console.log(result);
//Output -> D, as age is 16 the first condition is false and the nested condition age >= 18 is also false.

// 11. What will be the result of the following nested ternary expression:
// let result = true ? false ? true ? 'A' : 'B' : false ? 'C' : 'D' : 'E'; 
// console.log(result);

//The result is D as true ? the control will go to false ? the control will go to false ? D will be the result.
// true -> false -> false -> "D"