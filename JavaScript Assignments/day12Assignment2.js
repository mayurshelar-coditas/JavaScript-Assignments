//1. An area of a rectangle is calculated as follows: area = length x width. 
//   Write a function which calculates areaOfRectangle.
const calculateRectangleArea = (length, width) => {
    return length * width;
}
console.log(`Area of rectangle is ${calculateRectangleArea(5,6)}`);

// 2. Write a function called checkSeason, 
//    it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const checkSeason = (monthOfYear) => {
    switch(monthOfYear.toLowerCase()){
        case 'january':
            return 'Winter';
        case 'february':
            return "Winter";
        case 'march':
            return 'Spring';
        case 'april':
            return 'Spring';
        case 'may':
            return "Summer";
        case 'june':
            return 'Summer';
        case 'july':
            return 'Summer';
        case 'august':
            return 'Summer';
        case 'september':
            return 'Autum';
        case 'october':
            return 'Autum';
        case 'november':
            return 'Autum';
        case 'december':
            return 'Winter';
        default:
            return "Invalid month";
    }
}

console.log(checkSeason('September')); //Autum

// Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const findMax = (firstNumber, secondNumber, thirdNumber) => {
    if(firstNumber > secondNumber)
        return firstNumber > thirdNumber ? firstNumber : thirdNumber;
    return secondNumber > thirdNumber ? secondNumber : thirdNumber;
}

console.log(findMax(0, 10, 5)); // 10
console.log(findMax(0, -10, -2)) // 0

 
const swapValues = (firstValue, secondValue) => {
    console.log(`Values before swapping firstValue = ${firstValue} secondValue = ${secondValue}`);
    firstValue += secondValue;
    secondValue = firstValue - secondValue;
    firstValue -= secondValue;
    console.log(`Values after swapping firstValue = ${firstValue} secondValue = ${secondValue}`);
}

swapValues(5,7);

// 5. Write a function generateColors which can generate any number of hexa or rgb colors.



const generateColors = (value, count) => {
    const colorCodeArray = [];
    if(value === "hexa"){
        const lengthOfHexaNumber = 6;
        const validHexCharacters = '0123456789abcdef';

        while(colorCodeArray.length < count){
            let colorCode = '#';
            while(colorCode.length < lengthOfHexaNumber){
                colorCode += (validHexCharacters[Math.round(Math.random()*validHexCharacters.length)]);
            }
            colorCodeArray.push(colorCode);
        }
        return colorCodeArray;
    }
    while(colorCodeArray.length < count){
        const red = Math.ceil(Math.random()*255), blue = Math.ceil(Math.random()*255), green = Math.ceil(Math.random()*255);

        const rgbColorCode = `rgb(${red}, ${green}, ${blue})`;

        colorCodeArray.push(rgbColorCode);
    }
    return colorCodeArray;
}
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
// 6. Write a function called modifyArray takes array as parameter 
//    and modifies the fifth item of the array and return the array. 
//    If the array length is less than five it return 'item not found'.


const modifyArray = (arrayToModify) => {
    if(arrayToModify.length < 5)
        return 'item not found';
    arrayToModify[4] = arrayToModify[4].toUpperCase();
    return arrayToModify;
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
// //['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']

// 7. Write a functions which checks if all items are unique in the array.
const isUnique = (numbers) => {
    const duplicateArray = [];
    for (const number of numbers) {
      if (duplicateArray.includes(number)) 
        return false;
      else 
        duplicateArray.push(number);
    }
    return true;
  };
  console.log(isUnique([13, 64, 9, 2, 4, 3]));
  console.log(isUnique([13, 64, 9, 2, 4, 4]));
  

// 8. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
const sevenRandomNumbers = () => {
    const arrayOfSevenRandomNumbers = [];
    while(arrayOfSevenRandomNumbers.length < 7){
        const randomNumber = Math.round(Math.random()*9);
        if(!arrayOfSevenRandomNumbers.includes(randomNumber)){
            arrayOfSevenRandomNumbers.push(randomNumber);
        }
    }
    return arrayOfSevenRandomNumbers;
}
console.log(sevenRandomNumbers());
// [(1, 4, 5, 7, 9, 8, 0)]