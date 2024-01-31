// Create file and use the JavaScript typeof operator to check different data types. Check the data type of each variable.

//First we'll check the type of primitive data types.

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

/*Output: 
    string
    number
    boolean
    symbol
    undefined
    object
*/ 

//Then we'll check the type if non primitive data type, which is object and includes arrrays and function.

const personalDetails = ["Mayur", 21, "Associate Software Engineer"];
const examDetails = {subject : "English", examName : "JAN-FEB 2034", maximumMarks : 100};

function displayMarks(){
    console.log(marksObtained);
} 

console.log(typeof personalDetails);
console.log(typeof examDetails);
console.log(typeof displayMarks);

/* Output: 
    object
    object
    function
*/
