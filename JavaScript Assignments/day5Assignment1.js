// DAY-5 Assignment

// Declare a variable and assign a value 'Easy JavaScript Assignments'.
let assignmentName = 'Easy JavaScript Assignments';

// Print the length of the string.
console.log(assignmentName.length);

// Change all the string characters to capital letters using toUpperCase() method
console.log(assignmentName.toUpperCase());

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(assignmentName.toLowerCase());

// Slice out the first word of the string using substr() and substring() method
console.log(assignmentName.substr(0, 4));//Output - Easy.
console.log(assignmentName.substring(0, 4)); //Output - Easy.

// Slice out the phrase JavaScript Assignments from 'Easy JavaScript Assignments'..
console.log(assignmentName.substring(5 ,15)); //Output JavaScript.
console.log(assignmentName.substr(5 ,10)); //Output JavaScript.

// Check if the string contains a word Script using includes() method
console.log(assignmentName.includes("Script")); //returns true.

// Split the string into an array using split() method.
let firstArray = assignmentName.split(); 
console.log(firstArray); //Output: [ 'Easy JavaScript Assignments' ].

// Split the string 'Easy JavaScript Assignments' at the space using split() method
let secondArray = assignmentName.split(" "); 
console.log(secondArray); //Output: [ 'Easy', 'JavaScript', 'Assignments' ]

// 'ELTP, BATCH, THREE' split the string at the comma and change it to an array.
const string = 'ELTP, BATCH, THREE';
let thirdArray = string.split(',');
console.log(thirdArray); //Output: [ 'ELTP', ' BATCH', ' THREE' ]

// Change 'Easy JavaScript Assignments' to 'Easy Python Assignments' using replace() method.
console.log(assignmentName.replace('JavaScript', 'Python')); //Output - Easy Python Assignments

// What is character at index 20 in 'Easy JavaScript Assignments' string? Use charAt() method.
console.log(assignmentName.charAt(20)); //Output - g 

// What is the character code of J in 'Easy JavaScript Assignments' string using charCodeAt()
console.log(assignmentName.charCodeAt(5)); //Output: 

// Use indexOf to determine the position of the first occurrence of 'a' in 'Easy JavaScript Assignments'
console.log(assignmentName.indexOf('a')); //Output - 1

// Use lastIndexOf to determine the position of the last occurrence of 'a' in 'Easy JavaScript Assignments'.
console.log(assignmentName.lastIndexOf('a')); //Output - 8

// Use indexOf to find the position of the first occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
const randomString = 'Easy JavaScript Assignments, Easy Easy';
console.log(randomString.indexOf("Easy")); //Output - 0

// Use lastIndexOf to find the position of the last occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log(randomString.lastIndexOf("Easy")); //Output - 34


// Use search to find the position of the first occurrence of the word 'Easy' in the following sentence: 'Easy JavaScript Assignments, Easy Easy'
console.log(randomString.search("Easy")); //Output - 0

// Use trim() to remove any trailing whitespace at the beginning and the end of a string. '       Easy JavaScript Assignments, Easy Easy             '
console.log('       Easy JavaScript Assignments, Easy Easy             '.trim()); //Output - Easy JavaScript Assignments, Easy Easy

// Use startsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log(randomString.startsWith("Easy")); //output - true

// Use endsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log(randomString.endsWith("Easy")); //output - true

// Use match() method to find all the a’s in 'Easy JavaScript Assignments'
console.log(randomString.match(/a/g)) //Output - [ 'a', 'a', 'a', 'a', 'a' ]

// Use concat() and merge 'Easy' and 'JavaScript' to a single string.
let courseName = "Easy".concat("JavaScript");
console.log(courseName); //Output: EasyJavaScript

// Use repeat() method to print 'Easy JavaScript' 3 times.
console.log('Easy JavaScript'.repeat(3)); //Output - Easy JavaScriptEasy JavaScriptEasy JavaScript.

// 'Javascript is Easy, too Easy, too Easy, Easy to learn' Count the number of word 'Easy' in this sentence.
const difficultyLevelOfJavaScript = "Easy, too Easy, too Easy, Easy to learn";
//1st method to do so.
console.log(difficultyLevelOfJavaScript.match(/Easy/g).length); //Output - 4
//2nd method to do so.
console.log(difficultyLevelOfJavaScript.split("Easy").length - 1); //Output - 4

// Use match() to count the number of all 'Easy' in the following sentence:'Javascript is Easy, too Easy, too Easy, Easy to learn'
const howEasyIsJavaScript = 'Javascript is Easy, too Easy, too Easy, Easy to learn';
console.log(howEasyIsJavaScript.match(/Easy/g).length); //Output - 4

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %softwa@r%e %e@ngineer,&and& %java@sc@ript% is Ea%s#y';
const mostFrequentWord = sentence.replace(/[^a-zA-Z0-9\s]/g,'');
console.log(mostFrequentWord); 

// 28. Calculate the total annual income of the person by extracting the numbers from the following text. 
let details = 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading';
let detailsArray = details.split(" ");
 
let salary = details.match(/\d+/g);
console.log(+salary[0] + +salary[1] + +salary[2] + +salary[3]); //Output - 80000.

