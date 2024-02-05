// Day - 9 Assignment
// Check if type of '70' is equal to 70
console.log('70' === 70); //Output - false as === checks type as well as value hence it returning false.

// Check if parseInt('8.8') is equal to 9
console.log(parseInt('8.9') === 9); //Using === as it is suggest to always use '==='; 
//Even though type of both 9 and parseInt('8.9') is same but as their value is different it return false;

// Boolean value is either true or false.
// Write five JavaScript statement which provide falsy value.
const firstName = "";
const isMinor = false;
const experienceInYears = 0;
const salary = null;
const age = undefined;

// Write five JavaScript statement which provide truthy value.
const collegeName = "IIT Delhi"; //As is not an empty string.
const marksObtained = 100; //is not 0
const isAuthentic = true; //as its not false
const fruits = []; //Array
const studentRecords = {}; //Object
 

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
5 > 4 // true 
4 >= 3 // true
4 < 3 // false
4 <= 3 //false
5 == 5 //true
9 === 9 //true
9 == '9' // true
8 === '8' //false
4 != 4  //false
4 !== 4 //false
4 != '4'// false
4 !== '4'// true

console.log('\n');
console.log(5 > 4); 
console.log(4 >= 3); 
console.log( 4 < 3); 
console.log(4 <= 3);
console.log(5 == 5);
console.log(9 === 9);
console.log(9 == '9'); 
console.log(8 === '8');
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 !== '4');



// Find the length of python and jargon and make a falsy comparison statement.
const firstLanguage = "python";
const secondLanguage = "jargon";

console.log(firstLanguage === secondLanguage);

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12 // true
4 > 3 && 10 > 12 //false
4 > 3 || 10 < 12 //true
4 > 3 || 10 > 12 //true
!(4 > 3) //false
!(4 < 3) //true
!(false) //true
!(4 > 3 && 10 < 12) //false
!(4 > 3 && 10 > 12) //true
!(4 === '4') // true
// There is no 'on' in both dragon and python -> fasle

console.log('\n');
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'));
console.log(!"python".includes('on') && !"dragon".includes('on'));