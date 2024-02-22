// Assignment - 17 (Promises)
// DEADLINE - 21st Feb 2025, 9:29AM
const countriesAPI = 'https://restcountries.com/v2/all';

// Read the countries API using fetch and print the name of country, capital, languages, population and area.

const countryDetails = async () => {
        const response = await fetch(countriesAPI);
        const countries = await response.json();
        countries.forEach(country => {
            const { name, capital, languages, population, area } = country;
            console.log(`Name: ${name}`);
            console.log(`Capital: ${capital}`);
            console.log(`Languages: ${languages.map(language => language.name).join(', ')}`); 
            console.log(`Population: ${population}`);
            console.log(`Area: ${area}`);
        });
        return countries;
};

const countries = countryDetails();

// Read the countries api and find out the 10 largest countries
console.log();

const topTenLargestCountries = async () => {
      const countriesData = await countries;
        const topTenCountries = countriesData
        .sort((a, b) => b.area - a.area)
        .slice(0, 10);
  
      console.log('The 10 largest countries by area are:');
      topTenCountries.forEach(country => {
        const {name, area} = country;
        console.log(`${name} has an Area of ${area} sq. km`);
      });
  };
  
topTenLargestCountries();


