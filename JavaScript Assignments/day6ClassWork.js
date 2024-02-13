// //Booleans.

// //Logical Operators.

// //And
// true && true; // true
// true && false; // false
// false && true; // false
// false && false; // false

// //OR

// true || true //true
// true || false // true 
// false || true // true
// false || false // false

// //operators

// //!== this checks the type and != checks the value.
// // === checks the datatype as well as value and == checks the value. Always use ===. 

// console.log(5 < 'a');
// console.log(5 < '123');

// console.log(9 != '9'); // false
// console.log(9 !== '9'); // true

// console.log(NaN == NaN); //Returns false because the comparison is not possible.
// console.log(NaN === NaN);
// // console.log(false == false); True


// console.log(!!"true" == !!"false");


//Question.
// Build a simple authentication system. Users can access a secret page only if they meet the following criteria:

// They must be logged in.
// They must be at least 18 years old.
// Their account must not be suspended.

let isMinor = false;
let age = 1
if(age >= 18){
    isMinor = true
}
function authenticationSystem(isloggedIn, age, isMinor, isAccountSuspended){
    if(age >= 18){
        isMinor = true
    }

    return isloggedIn && !isMinor && !isAccountSuspended;
} 

console.log(authenticationSystem(true, isMinor, false)); //true;

console.log(authenticationSystem(false, false, true)); //false;

console.log(authenticationSystem(true, true, false)); //false;