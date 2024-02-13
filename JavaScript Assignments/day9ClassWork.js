//Iteration of Array
const numbers = [1,2,6,[5,5,6]];
for(const number of numbers){
    console.log(number);
}

const numbersArray = numbers.slice();//Using slice() we can perform shallow cloning.

numbers[2] = 12;

// const [firstNumber, secondNumber, thirdNumber, [a,b,c] : ["Array of Numbers"]] = numbers;

console.log(numbersArray);
console.log(numbers);


//Always prefer [...arrayName] for shallow clonning.
const arrayOfNumbers = [...numbers];
console.log(arrayOfNumbers);



//Objects
const employee1 = {
    name: "Mayur",
    employeeId: 2,
    tech: ["Javascript"], 
    address : {
        city: "Pune",
        country: "India"
    }
} 

const employee2 = {
    name: "Atharva",
    employeeId: 45
}


const employee5 = Object.assign(employee1);
const {name, ...employeeInfo} = employee1; //this is called array destructuring.
//Here the ... is called as "rest".
const {address: {city, country}} = employee1;

// console.log(address);

console.log(name);
console.log(employeeInfo);

const employee3 = {...employee1};

employee3.name = "Raj";
employee3.tech[2] = "Java";
console.log(employee1.tech[2]);

//To deep   clone the objects
const employee4 = JSON.parse(JSON.stringify(employee2));

employee2.name = "Prajwal";

console.log(employee4.name);

//Methods to perform deep clonning on object.//Always prefer using destructuring.

const {number, ...numberArray}  = numbers;

//but suppose it you have 10 elements in array and you want 5 elemen then use the following.
// const{,,,,,number5, ...numbersArray1} = numbers;

//Shallow and deep copy are very important topic
//Destructing is also very important concept.
//***IMP ***
//Always use destructing while working with object.

//object.assign method 

console.log(employee5);


// const {address : {"number one"}, ...restOfEmployeeInformatin} = employee1;

const employee7 = {
    name: {
    "first Name" : "Mayur",
    "last Name" : "Shelar"
    },    
    age : 21
}

const {name : {"first name": firstName}} = employee7;

console.log(name);

employee7.age = 22;

console.log(employee7);

const employeeInformation = {
    name: "Mayur",
    "age": 21,
}

const entries = Object.entries(employeeInformation);
for(const [key, value] of entries){
    console.log(`key: ${key}, value: ${value}`);
}

const address = {
    city: "Pune",
    country: "India",
    ...employeeInformation
}

console.log(address);

// for nested eg.
// const {father:{firstName}} = info;
