// Day-11 Assignment
// Declare an empty array;
const emptyArray = [];

//1. Declare an array with more than 5 number of elements
const employeeAges = [24, 22, 25, 32, 41, 50];

//2. Find the length of your array
console.log(employeeAges.length); //Output -> 6.


// 3. Get the first item, the middle item and the last item of the array

console.log(employeeAges[0]); //Output -> 24
console.log(employeeAges[employeeAges.length/2]); //Output -> 32;
console.log(employeeAges[employeeAges.length-1]); //Output -> 50;

//Other way is to use pop, shift to return the first and the last element but then it will manipulate the array.
console.log(employeeAges.shift()); //Output -> 24
console.log(employeeAges.pop()); //Output -> 50


// 4. Declare an array called mixedDataTypes, 
//    put different data types in the array and find the length of the array. 
//    The array size should be greater than 5
const isMinor = false;
const mixedDataTypes = [1, "Mayur", 21, 121.23, "Shelar", isMinor];
console.log(mixedDataTypes.length);



// 5. Declare an array variable name itCompanies and assign initial values 
//    Coditas, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Coditas', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];


// 6. Print the array using console.log()
console.log(itCompanies);

// 7. Print the number of companies in the array
console.log(`There are ${itCompanies.length} in the array.`); //Output -> There are 7 in the array.

// 8. Print the first company, middle and last company
console.log(itCompanies[0]); //Coditas
console.log(itCompanies[Math.floor(itCompanies.length/2)]); //Apple
//As our index is parsed into string 7/2 -> 3.5 which is an invalid index, hence we will floor it. 
console.log(itCompanies[itCompanies.length-1]); //Amazon

// 9. Print out each company
for(let indexOfArray = 0; indexOfArray < itCompanies.length; indexOfArray++){
    console.log(itCompanies[indexOfArray]);
}

// 10. Change each company name to uppercase one by one and print them out
const itCompanyNamesUpperCased = [];
for(let indexOfArray = 0; indexOfArray < itCompanies.length; indexOfArray++){
    itCompanyNamesUpperCased.push(itCompanies[indexOfArray].toUpperCase());
    console.log(itCompanyNamesUpperCased[indexOfArray]);
}


// 11. Print the array like as a sentence: Coditas, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(`${itCompanies.toString()} are big IT companies.`);


// 12. Check if a certain company exists in the itCompanies array. 
//     If it exist return the company else return a company is not found(
console.log(itCompanies.includes("Netflix")); //false
console.log(itCompanies.includes("Google")); //true


// 13.  Filter out companies which have more than one 'o' without the filter method
const filteredCompanies = [];
for(let indexOfArray = 0; indexOfArray < itCompanies.length; indexOfArray++){
    if(itCompanies[indexOfArray].split("o").length > 2){
        filteredCompanies.push(itCompanies[indexOfArray]);
    }
}

console.log(filteredCompanies);

// 14. Sort the array using sort() method
console.log(itCompanies.sort()); //Output -> [ 'Amazon', 'Apple', 'Coditas', 'IBM', 'Microsoft', 'Oracle' ]

// 15. Sort the array by company name length without sort;
itCompanies.sort(myFunction = (a,b) => a.length - b.length);

console.log(itCompanies);//Output -> [ 'IBM', 'Apple', 'Amazon', 'Oracle', 'Coditas', 'Microsoft' ]

// 16. Reverse the array using reverse() method
console.log(itCompanies.reverse()); //Output -> [ 'Microsoft', 'Coditas', 'Oracle', 'Amazon', 'Apple', 'IBM' ]

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3)); //Output -> [ 'Microsoft', 'Coditas', 'Oracle' ]

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3)); //Output -> [ 'Amazon', 'Apple', 'IBM' ]


// 19. Slice out the middle IT company or companies from the array
itCompanies.length % 2 ? console.log(itCompanies.slice(itCompanies.length/2, (itCompanies.length/2) + 1)) : 
console.log(itCompanies.slice(itCompanies.length/2, (itCompanies.length/2) + 1));

// 20. Remove the first IT company from the array
console.log(itCompanies.shift()); //Microsoft.

// 21. Remove the middle IT company or companies from the array
middleIndexOfItCompanies = Math.floor(itCompanies.length / 2);

if (itCompanies.length % 2 === 1) {
  itCompanies.splice(middleIndexOfItCompanies, 1); 
} else {
  itCompanies.splice(middleIndexOfItCompanies - 1, 2); 
}

// 22. Remove the last IT company from the array
console.log(itCompanies.pop()); //IBM

// 23. Remove all IT companies
console.log(itCompanies.splice(0, itCompanies.length));

// 24. First remove all the punctuations and change the string to array
//     and count the number of words in the array, dont use regex
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango';
text = text.replaceAll(",", "");
text = text.replaceAll(".", "");

const arrayOfStrings = text.split(" ");
console.log(arrayOfStrings.length); //Output -> 14.

// 25. In the following shopping cart add, remove, edit items
   const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

   // add 'Rasmalai' in the beginning of your shopping cart if it has not been already added
    shoppingCart.unshift("Rasmalai"); //ShoppingCart -> [ 'Rasmalai', 'Milk', 'Coffee', 'Tea', 'Honey' ].

// add Gulabjamun at the end of you shopping cart if it has not been already added
    shoppingCart.push("Gulabjamun"); //shoppingCart -> [ 'Rasmalai', 'Milk', 'Coffee', 'Tea', 'Honey', 'Gulabjamun' ]

// remove 'Honey' if you are allergic to honey
    shoppingCart.splice(shoppingCart.indexOf("Honey"), 1); //shoppingCart -> [ 'Rasmalai', 'Milk', 'Coffee', 'Tea', 'Gulabjamun' ]

// modify Tea to 'Green Tea'
    shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea"; //[ 'Rasmalai', 'Milk', 'Coffee', 'Green Tea', 'Gulabjamun' ]

// 26. In countries array check if 'India' exists in the array if it exists print 'INDIA'. 
//     If it does not exist add to the countries list.
const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','India','Germany','Hungary','Ireland','Japan','Kenya'];

countries.indexOf('India') === -1 ? countries.push("India") : console.log("INDIA");
    

// 27. In the webTechs array check if Sass exists in the array and 
// if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB'];

webTechs.includes('Sass') ? console.log("Sass is a CSS preprocess") : webTechs.push("Sass");

// 28. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)

// 29. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
console.log(ages.sort());

const minimumAge = ages[0];
const maximumAge = ages[ages.length-1];
console.log(`Min age is: ${minimumAge}`);
console.log(`Min age is: ${maximumAge}`);

// Find the median age(one middle item or two middle items divided by two)
let medianAge;
if (ages.length % 2 === 0) {
  const middleIndexOfAges1 = ages.length / 2 - 1, middleIndexOfAges = ages.length / 2;
  medianAge = (ages[middleIndexOfAges1] + ages[middleIndexOfAges]) / 2;
} else {
  const middleIndexOfAges = Math.floor(ages.length / 2);
  medianAge = ages[middleIndexOfAges];
}
console.log(`The median age is: ${medianAge}`);

// Find the average age(all items divided by number of items)
let sum = 0;

for(let indexOfArray = 0; indexOfArray < ages.length; indexOfArray++){
    sum+=ages[indexOfArray];
} 
const averageOfAges = sum/ages.length;
console.log(`The average of ages is: ${averageOfAges}`);

// Find the range of the ages(max minus min)
console.log(`Range of ages is: ${maximumAge - minimumAge}`)

// Compare the value of (min - average) and (max - average), use abs() method 
Math.abs(minimumAge-averageOfAges) > Math.abs(maximumAge-averageOfAges) ? console.log("A"):console.log("B");

// 1.Slice the first ten countries from the countries array
console.log(countries);
console.log(countries.slice(0, 10));

// 30. Find the middle countries in the countries array.
let middleCountries;
if (countries.length % 2 === 1) {
  const middleIndexOfCountries = Math.floor(countries.length / 2);
  middleCountries = [countries[middleIndexOfCountries]];
} else {
  const middleIndexOfCountries1 = countries.length / 2 - 1;
  const middleIndexOfCountries2 = countries.length / 2;
  middleCountries = [countries[middleIndexOfCountries1], countries[middleIndexOfCountries2]];
}

console.log(middleCountries);

// 31. Divide the countries array into two equal arrays if it is even. 
//If countries array is not even , one more country for the first half
let firstHalfOfCountries, secondHalfOfCountries;

if (countries.length % 2 === 0) {
  const middleIndexOfCountries = countries.length / 2;
  firstHalfOfCountries = countries.slice(0, middleIndexOfCountries);
  secondHalfOfCountries = countries.slice(middleIndexOfCountries);
} else {
  const middleIndexOfCountries = Math.ceil(countries.length / 2);
  firstHalfOfCountries = countries.slice(0, middleIndexOfCountries);
  secondHalfOfCountries = countries.slice(middleIndexOfCountries);
}


