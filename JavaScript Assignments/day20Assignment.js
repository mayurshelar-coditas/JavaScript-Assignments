// Assignment - 17 (Promises)
const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';


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


// Read the countries api and find out the 10 largest countries
console.log();

const topTenLargestCountries = async () => {
      const countriesData = await countryDetails();
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


const catDetails = async () => {
    const response = await fetch(catsAPI);
    const data = await response.json();
    return data;
};

const printCatNames = async () => {
    const catsData = await catDetails();
    const catNames = catsData.map(cat => {
        const {name} = cat; 
        return name;
    });
    catNames.forEach(name => console.log(name));
};

printCatNames();

// Read the cats api and find the average weight of cat in metric unit.

const calculateAverageCatWeight = async () => {
    const catsData = await catDetails();
    const weights = catsData.map(cat => {
        // Split the weight string by '-', map to integers, and filter out any NaN values
        return cat.weight.metric.split('-').map(weight => parseInt(weight.trim())).filter(weight => !isNaN(weight));
    }).flat(); // Flatten the array of arrays into a single array

    const totalWeight = weights.reduce((acc, curr) => acc + curr, 0);
    const averageWeight = totalWeight / weights.length;
    console.log('Average Cat Weight in Metric:', averageWeight.toFixed(2));
};

calculateAverageCatWeight();
