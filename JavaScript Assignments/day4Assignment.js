//Question 1- Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof '10' === typeof 10) // returns false.

//Hence we have to parse it to int using parseInt
const integer = parseInt('10'); //Here we can also make use of Number() because there its purely a number.

console.log(typeof integer === typeof 10); 

//Question 2 - Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let float = parseFloat('9.8'); 

console.log(float === 10) //output is false 

float = Math.round(float); //Here we can also make use of ceil as the highest for 9.8 is value is 10.

console.log(float === 10);


//Question 3 - Generate a random number between 0 and 100 inclusively.

const randomNumber = Math.ceil((Math.random() * 100));
console.log(randomNumber);



//Question 4 - Generate a random number between 50 and 100 inclusively.

function generateRandomNumber(min, max){
    return Math.ceil(Math.random() * (max-min)+min); // Here we are adding the result with the minimum number to bring yhr 
}

console.log(generateRandomNumber(50, 100));

// Question 5 - Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125


console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

/* Output - 
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
 */


    // Question 6 - Enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

function calculateAreaOfTriangle(base, height){
    const areaOfTriangle = 0.5 * base * height;
    
    //we could have also used the shorthand but the one we used above is more convinient.
    //areaOfTraingle *= 0.5;
    //areaOfTraingle *= height;
    //areaOfTraingle *= base;
    
    return areaOfTriangle;
} 

console.log(calculateAreaOfTriangle(10, 20)); //Output 100;
