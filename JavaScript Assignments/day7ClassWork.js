console.log(!!true);
console.log("" === false); //because before parsing we are checking the type.

let isLogin = true;
let isSuspended = false; 
let age = 90;

isLogin === true ? isSuspended ? console.log("Your Account is Suspended") : age >= 18 ? console.log("Success") : console.log("Minor")
: console.log("User is not logged in"); 

day = "Monday";

switch(day){
    case "Monday":
        console.log("if_else");
        break;
    case "Tuesday":
        console.log("ternary operator");
        break;
    default:
        console.log("JavaScript");
    }

const minimumAgeAllowedInSectionOne = 18;
const minimumAgeAllowedInSectionTwo = 24;

if(age>= minimumAgeAllowedInSectionOne && age>=minimumAgeAllowedInSectionTwo){
    console.log("Allowed in both the sections");
} else if(age >= minimumAgeAllowedInSectionTwo){
    console.log("Allowed in section Two")
} else if(age >= minimumAgeAllowedInSectionTwo){
    console.log("Allowed in section One");
} else {
    console.log("Not allowed in either section")
}

(age >= minimumAgeAllowedInSectionOne) ? console.log("Allowed in section One") : age >= minimumAgeAllowedInSectionTwo ? console.log("Allowed in section Two") 
: console.log("Not allowed in either section");

// age >= minimumAgeAllowedInSectionOne ? console.log("Allowed in section One") : 

//Using if else or ternary or switch case depends upon 