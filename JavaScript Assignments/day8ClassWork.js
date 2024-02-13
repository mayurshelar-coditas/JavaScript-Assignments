let array = [1,2,3,4];

console.log(array['length']);
//Properties of array -> length.

//push() return new length of the array

console.log(array.push(2,3,4,5)); //You can push multiple elements in array.
console.log(array.pop()); //removes and return the element at the end of the array.
console.log(array.shift()); //remove and returns array at beginning of the array.
console.log(array.unshift()); //adds at the beginning of the array and returns the new length.
console.log(array.slice(1, 3)); 
console.log(array.join("")); //has more preference than toString as it provides more flexibility.
console.log(array.splice(1, 2, 41, 51)); //Modifies the original array and returns the deleted elements.
//In spile first param is for from where to delete, 2nd is for how many to delete and after that you can specify any numbe of elements you want to add in the array. 
console.log(array);

let mixedArray = [1,3,2, "mayur", 45, 54];
console.log(mixedArray.sort());
console.log(array.sort());

let arrayOfStrings = ["mayur", "shelar", "software developer", "Hi", "I", "am"];
console.log(arrayOfStrings.sort(myFunction = (a,b) => a.length - b.length));

console.log(array.reverse());

console.log(array.push(70));

array.splice(2, 0, 15);
// console.log(array);

console.log(array.indexOf(2334));

console.log(array.indexOf(3, 2)); //if 2nd param is passed it start searching from the param and skip the indexes before the param passed.

let nestedArray = [[[1],2], 6,7,8];
console.log(nestedArray.flat());

console.log(array.toString());

//How to if array is Array -> using isArray.
console.log(Array.isArray(array));

const number = 15;

number % 2 ? console.log("Number is odd") : console.log("Number is even");
