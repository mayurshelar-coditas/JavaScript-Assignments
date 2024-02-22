// Assignment - 17 (Promises)
// DEADLINE - 21st Feb 2025, 9:29AM
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
// Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countryDetails = new Promise((resolve, reject) => {
    return fetch(countriesAPI);
});

countryDetails.then(response => response).then(data => data.forEach((country) => {
    const {name, capital, languages, poplulation} = country;
    console.log(`Name: ${name}, Capital: ${capital}, languages: ${languages}, Population: ${poplulation}`);
})).catch("Error fetching data");

// Print out all the cat names in to catNames variable.
const cats = new Promise((resolve, reject) => {
    fetch(catsAPI)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
});

cats.then(data => {
    data.forEach(cat => console.log(`Cat name: ${cat.name}`));
}).catch(error => {
    console.log("Something went wrong", error);
});

// Read the cats api and find the average weight of cat in metric unit.

// cats.then(data => {
//     data.forEach(cat => console.log(`Cat name: ${cat.name}`));
// }).catch(error => {
//     console.log("Something went wrong", error);
// });
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.


