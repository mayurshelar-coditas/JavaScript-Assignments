//  const outerPromise = new Promise((resolve, reject) => {
//  const promise1 = new Promise((resolve, reject) => resolve("Hey"));
//  const promise2 = new Promise((resolve, reject) => reject("Promise2"));
//  const promise3 = new Promise((resolve, reject) => resolve("Promise3"));
//  })
 
// Promise.all([promise1, promise3, promise2]).then(() => console.log("Fullfilled")).catch(error => console.log(error));

const sum = async() => {
    return new Promise((resolve, reject) => setTimeout(() => resolve("Resolved after 2 seconds"), 2000));
}

const asyncCalling = async()=>{
    console.log("Calling after 2 seconds");
    const result = await sum();
    console.log(result);
    console.log("Async function execution continuew")
}

console.log("Before calling async fuction");
asyncCalling();
console.log("After calling async function");