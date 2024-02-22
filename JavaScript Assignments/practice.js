// const numbersArray = [1,2,3,4,5,6];

// // console.log(JSON.parse(JSON.stringify(number)));

// //Map, reduce, filter

// const squareArray = numbersArray.map((number) => number**2);

// console.log(squareArray);

// const evenNumberArray = numbersArray.filter((number) => number%2 === 0);

// console.log(evenNumberArray);

// const sum = numbersArray.reduce((accumulator, currentValue) => accumulator += currentValue, 0);

// console.log(sum);

// console.log(numbersArray.some((number) => number%2===0));
// console.log(numbersArray.every((number) => number%2===0));

// console.log (numbersArray.forEach((element) => console.log(element)));


const executeAfterSeconds = async() => {
    return new Promise((resolve) => setTimeout(() => resolve("executeAfter2Seconds"), 2000));
}

try{
    const asyncCalling = async() => {
        console.log("Calling after 2 seconds");
        const result = await executeAfterSeconds();
        console.log(result);
    }
}catch(error){
    console.log(error);
}

console.log("Calling asyn func");
asyncCalling();
console.log("Function called");

const dataFromAPI = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 1000);

    if(randomNumber > 900)
        return resolve("Number is big enough!");

    return reject("Number is too small");
});

dataFromAPI.then(resolve => console.log(resolve)).catch(reject => console.log(reject)).finally("Function exexuted successfully!");

const personalInformation = {
    name: {
        firstName: "Mayur",
        lastName: "Shelar",
        skills: ["fdg","dfg", 767]
    }, 
    phoneNumber: 887809669,
    address: "Pune",
    
}

const { name:{firstName, lastName, skills: [firstSkill, secondSkill, thirdSkill]}, phoneNumber, address} = personalInformation;
console.log(firstName);
console.log(firstSkill);