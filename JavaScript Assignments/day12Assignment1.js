// DAY -15 ASSIGNMENT  (LOOPS)
// NOTE: You guys can use (for, for of, for in, while, do while loop), whichever you feel is best.

// Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let number=0; number <= 10; number++){
    console.log(number);
}
let number = 0;
while(number <= 10){
    console.log(number++); 
}

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let number=10; number>=0; number--){
    console.log(number);
}

while(number >= 0){
    console.log(number--);
}

// Iterate 0 to n using for loop
let n = 12;

for(let number=0; number <= n; number++){
    console.log(number);
}

// 4. Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
for(let row = 1; row <= 7; row++){
    console.log(("#").repeat(row));
}

// 5. Using loop print the following pattern
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
for(let i=0; i <= 10; i++){
    console.log(i, i**2, i**3);
}

// 5. Use for loop to iterate from 0 to 100 and print only even numbers
for(let number=0; number <= 100; number++){
    //To check if number is even or not
    if(number % 2 === 0)
        console.log(number);
}

// 6. Use for loop to iterate from 0 to 100 and print only odd numbers
for(let number=0; number <= 100; number++){
    //To check if number is odd or not.
    if(number % 2)
        console.log(number);
}

// 7. Use for loop to iterate from 0 to 100 and print only prime numbers
for(let number = 0; number<=100; number++){
    if(number === 0 || number === 1){
        continue;
    }
    //To check if the number is prime or not
    let isPrime = true;
    for(let divisor=2; divisor < Math.sqrt(number); divisor++){
        if(number % divisor === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime)
        console.log(number);
}
// 8. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sumOfNumbers = 0;

for(let number=0; number <= 100; number++){
    sumOfNumbers += number;
}

console.log(`Sum of numbers from 0 to 100 is ${sumOfNumbers}`);

// 9. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumOfEvenNumbers = 0, sumOfOddNumbers = 0;

for(let number = 0; number <= 100; number++){
    number%2 ? sumOfOddNumbers+= number : sumOfEvenNumbers+=number;
}

console.log(`Sum of even numbers is ${sumOfEvenNumbers} and sum of odd numbers is ${sumOfOddNumbers}`);//O/P:   [2550, 2500]

// 11. Develop a small script which generate array of 5 random numbers
const sequenceOfNaturalNumbers = [];

for(let number = 2; number < 7; number++){
    sequenceOfNaturalNumbers.push(Math.floor(Math.random()*number));
}

console.log(sequenceOfNaturalNumbers);//[ 1, 1, 3, 4, 3 ]

// 12. Develop a small script which generate array of 5 random numbers and the numbers must be unique
const sequenceOfUniqueNumbers = [];

while(sequenceOfUniqueNumbers.length < 5){
    const randomNumber = Math.floor(Math.random()*10);

    if(!sequenceOfUniqueNumbers.includes(randomNumber)){
        sequenceOfUniqueNumbers.push(randomNumber);
    }
}

console.log(sequenceOfUniqueNumbers); 

// 13. Develop a small script which generate a six characters random id: //iuyt56
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let sixRandomCharacters = "";
while (sixRandomCharacters.length < 6) {
    sixRandomCharacters += characters[Math.floor(Math.random() * characters.length)];
}
console.log(sixRandomCharacters);

// 14. Develop a small script which generate any number of characters random id.
let sequenceOfRandomCharacters = "";
const length = 10;
while (sequenceOfRandomCharacters.length < length) {
    sequenceOfRandomCharacters += characters[Math.floor(Math.random() * characters.length)];
}
console.log(sequenceOfRandomCharacters);

// 15. Write a script which generates a random hexadecimal number.
const validHexCharacters = '0123456789ABCDEF'
const lengthOfHexadecimalNumber = Math.round(Math.random()*15);
let hexadecimalNumber = '';
while(hexadecimalNumber.length < lengthOfHexadecimalNumber){
    hexadecimalNumber += validHexCharacters[Math.round(Math.random()*lengthOfHexadecimalNumber)];
}
console.log(hexadecimalNumber);

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Iceland',
    'Kenya'
  ]
// 16. Using the above countries array, create the following new array.
const listOfCountries = [];

for(const country of countries){
    listOfCountries.push(country.toUpperCase());
}
console.log(listOfCountries);

// 17. Using the above countries array, create an array for countries length
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
const countriesLength = [];

for(const country of countries){
    countriesLength.push(country.length);
}

console.log(countriesLength);

// 18. Use the countries array to create the following array of arrays:
//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
const countriesInformation = [];
for(index in countries){
    const nestedArray = [];
    nestedArray.push(countries[index]);
    nestedArray.push(listOfCountries[index].substring(0,3));
    nestedArray.push(countriesLength[index]);
    countriesInformation.push(nestedArray);
}

console.log(countriesInformation);

// 19. In above countries array, check if there is a country or 
// countries containing the word 'land'. If there are countries containing 'land', print it as array. 
// If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland'].
const countriesWithLand = [];
   for(const country of countries){
    if(country.toLowerCase().includes('land'))
     countriesWithLand.push(country);
}
   
countriesWithLand ? console.log(countriesWithLand) : console.log('All these countries are without land');

// 20. Using the above countries array, find the country containing the biggest number of characters.
let countryWithMaxLength = '';

for(const country of countries){
    if(countryWithMaxLength.length < country.length)
        countryWithMaxLength = country;
}
console.log(countryWithMaxLength);

// 21. Using the above countries array, find the country containing only 5 characters.
for(country of countries){
    if(country.length === 5){
        console.log(country);
    }
}

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
// 22. Find the longest word in the webTechs array.
let longestWord = '';

for(const tech of webTechs){
   if(longestWord.length < webTechs.length)
    longestWord = tech;
}
console.log(longestWord);

// 23. Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
const arrayOfWebTechs = [];
for(const tech of webTechs){
    const nestedArray = [];
    nestedArray.push(tech);
    nestedArray.push(tech.length);

    arrayOfWebTechs.push(nestedArray);
}
console.log(arrayOfWebTechs);

// 24. An application created using MongoDB, Express, React and Node is called a MERN stack app. 
//     Create the acronym MERN by using the array mernStack.
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

let acronym = '';
for(technology of mernStack){
    acronym += technology[0];
}

console.log(acronym);

// 25. Iterate through the array, 
//     ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] 
//     using a for loop or for of loop and print out the items.
    for(const technology of webTechs){
        console.log(technology);
    }

// 26. This is a fruit array , 
// ['banana', 'orange', 'mango', 'lemon'] 
// reverse the order using loop without using a reverse method.
const fruits = ['banana', 'orange', 'mango', 'lemon']; 
for(let index = 0; index < fruits.length/2; index++){
    let temp = fruits[index];
    fruits[index] = fruits[fruits.length - 1 - index];
    fruits[fruits.length - 1 - index] = temp;
}
console.log(fruits);


// 27. Print all the elements of array as shown below.
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

for(const technology of fullStack){
    console.log(technology);
}

// OUTPUT: 

//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB