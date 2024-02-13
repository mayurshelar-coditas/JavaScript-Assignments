const array1 = [1,2,3, [4,5]];

const array2 = array1.slice();

array2[3] = 8;

console.log(array1); 
console.log(array2); 

array3 = Object.assign(array1);
console.log(array3);

const person1 = [
    {name: 'Akhil'},
    {name: 'Arjun'},
    {name: 'Mayur'},
    {name: 'Aditya'},
    {name: 'yash'},
    {name: 'Gaurav'},
    {name: 'Raj'},
] 

const personArray = Object.entries(person1);
for(const person of personArray){
    const [key, value] = person;
    console.log(`My name ${key} is ${value}`);
} 

//Loops arrayName.map((element, index, arrayName) => {}); here index and array are optional, 
//here the array parameter refers to the same array used to call the map function.
numbers = [0, 1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((number) => {return number ** 2});

console.log(squaredNumbers);

//Filter

const oddNumbers = numbers.filter((number) => {return number%2});

console.log(oddNumbers);

//reduce

const maximumValue = numbers.reduce((accumulator, currentValue) => {
    
    if(accumulator < currentValue){
        accumulator = currentValue;
    }
    return accumulator;
}, Number.MIN_VALUE);

console.log(maximumValue);

const minimumValue = numbers.reduce((accumulator, currentValue) => {
    
    if(accumulator > currentValue){
        accumulator = currentValue;
    }
    return accumulator;
}, Number.MAX_VALUE);

console.log(minimumValue);

//Immuatabilty, less errors, operation is very clear

// for every.
const isWholeNumber = numbers.some((number) => {
    if(number > 0){
        return true;
    }
    return false;
});

console.log(isWholeNumber);

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator += currentValue;
});

console.log(sum);

const numberIncrement = numbers.forEach(element => {
    return element+1;
});

console.log(numberIncrement);

//What is significance of array as third parameter in map or filter