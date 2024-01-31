// Create file and use the JavaScript typeof operator to check different data types. Check the data type of each variable.

//First we check the type of primitive data types.

const subjectName = "English";
const marksObtained = 80;
const isPass = true;
const examName = Symbol("JAN-FEB 2034");
let gotReward; //Explicitly assigning undefined is not a good practice hence using let for declaration.
const nextExam = null; 

console.log(typeof subjectName);
console.log(typeof marksObtained);
console.log(typeof isPass);
console.log(typeof examName);
console.log(typeof gotReward);
console.log(typeof nextExam);

