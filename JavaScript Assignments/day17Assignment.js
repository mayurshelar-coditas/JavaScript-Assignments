// DAY - 16 Assignment  (Higher Order Functions)
const countries = [ 'Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];
//1. Explain the difference between forEach, map, filter, and reduce.
// for

//2. Define a callback function before you use it in forEach, map, filter or reduce.

const printArrayElements = (arrayElement) => console.log(arrayElement);

//3. Use forEach to console.log each country in the countries array.
countries.forEach(printArrayElements);

//4. Use forEach to console.log each name in the names array.
// names.forEach(printArrayElements);

//5. Use forEach to console.log each number in the numbers array.
numbers.forEach(printArrayElements);


const convertArrayElementToUpperCase = (element) => element.toUpperCase();
//6. Use map to create a new array by changing each country to uppercase in the countries array.
const countriesInUpperCase = countries.map(convertArrayElementToUpperCase);
console.log(countriesInUpperCase);

//7. Use map to create an array of countries length from countries array.
const lenghtOfCountryNames = countries.map(country => country.length);
console.log(lenghtOfCountryNames);

//8. Use map to create a new array by changing each number to square in the numbers array
const squaredNumbers = numbers.map(number => number**2);
console.log(squaredNumbers);

//9. Use map to change to each name to uppercase in the names array.
const namesInUppercase = names.map(convertArrayElementToUpperCase);
console.log(namesInUppercase);

//10. Use map to map the products array to its corresponding prices.
const productPrices = products.map(product => {
    const {price} = product;
    return price;
});
console.log(productPrices);

//11. Use filter to filter out countries containing land.
const countryNamesIncludingLand = countries.filter(country => country.toLowerCase().includes('land'));
console.log(countryNamesIncludingLand);

//12. Use filter to filter out countries having six character.
const sixCharacterCountriesNames = countries.filter(country => country.length === 6);
console.log(sixCharacterCountriesNames);

//13. Use filter to filter out countries containing six letters and more in the country array.
const countriesWithSixPlusLetters = countries.filter(country => country.length > 6);
console.log(countriesWithSixPlusLetters);

//14. Use filter to filter out country start with 'E';
const countriesStartingwithLetterE = countries.filter(country => country[0].toLocaleLowerCase() === 'e');
console.log(countriesStartingwithLetterE);

//15. Use filter to filter out only prices with values.

//16. Declare a function called getStringLists which takes an array as a parameter 
//    and then returns an array only with string items.
const getStringLists = (array) => array.filter(arrayElement => typeof arrayElement === 'string');

//17. Use reduce to sum all the numbers in the numbers array.
const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator += currentValue, 0);
console.log(sumOfNumbers);

//18.  Use reduce to concatenate all the countries and to produce this sentence: 
//     Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries.
const europeanCountries = countries.reduce((accumulator, currentValue) => accumulator += `, ${currentValue}`);
console.log(europeanCountries);

//19. Explain the difference between some and every


//20. Use some to check if some names' length greater than seven in names array
console.log(names.some(name => name.length > 7));


//21. Use every to check if all the countries contain the word land
console.log(countries.every(country => country.toLowerCase().includes('land')));

//22. Explain the difference between find and findIndex.

//23. Use find to find the first country containing only six letters in the countries array
const countryWithSixLetters = countries.find(country => country.length === 6);
console.log(countryWithSixLetters);

//24. Use findIndex to find the position of the first country containing only six letters in the countries array
const indexOfCountryWithSixLetters = countries.findIndex(country => country.length === 6);
console.log(indexOfCountryWithSixLetters);

//25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const norwayIndex = countries.findIndex(country => country.toLocaleLowerCase() === 'norway');
console.log(norwayIndex);

//26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const russiaIndex = countries.findIndex(country => country.toLocaleLowerCase() === 'russia');
console.log(russiaIndex);

//27. Find the total price of products by chaining two or more array iterators
//    (eg. arr.map(callback).filter(callback).reduce(callback)).
const totalPrice = products.map(product => {
                                const {price} = product; 
                                return price;
                            })
                           .filter(price => typeof price === 'number')
                           .reduce((accumulator, currentValue) => accumulator+=currentValue);
console.log(totalPrice);

//28. Find the sum of price of products using only reduce reduce(callback))
const totalPriceOfProducts = products.reduce((accumulator, currentValue) => {
    const {price} = currentValue;
    if(typeof price === 'number') 
        accumulator += price;
    return accumulator; 
}, 0);
console.log(totalPriceOfProducts);

//29. Declare a function called categorizeCountries which returns an array of countries which have some common pattern
//    (you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const categorizeCountries = (countries, pattern) => countries.filter(country => country.toLowerCase().includes(pattern.toLowerCase()));
console.log(categorizeCountries(countries, 'land'));

//30. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
const countryInitialLetterCounts = (countries) => countries.map(country => )

//31. Declare a getFirstTenCountries function and return an array of ten countries. 
//    Use different functional programming to work on the countries.js array

//32. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

//33. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

//34. Use the countries information, in the data folder. Sort countries by name, by capital, by population

//35. Find the 10 most spoken languages:
// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 10))
// [
// {country: 'English',count:91},
// {country: 'French',count:45},
// {country: 'Arabic',count:25},
// {country: 'Spanish',count:24},
// {country:'Russian',count:9},
// {country:'Portuguese', count:9},
// {country:'Dutch',count:8},
// {country:'German',count:7},
// {country:'Chinese',count:5},
// {country:'Swahili',count:4}
// ]

// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [
// {country: 'English',count: 91},
// {country: 'French',count: 45},
// {country: 'Arabic',count: 25},
// ]```
// NOTE: Follow Best Practices