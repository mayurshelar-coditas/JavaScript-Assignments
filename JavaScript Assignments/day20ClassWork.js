// // const data = {
// //     user: [
// //         {
// //             name: "Mayur",
// //             tech: 'JS'
// //         }
// //     ]
// // }

// // const {user: [userDetials]} = data;
// // // const[userDetails] = user;
// // const {name} = userDetials;
// // console.log(name);

// //Promises.
// const getUsersAPIPromise = () => {
//     // const users = [{name: "Mayur"}, {name: "Steve"}, {name: "bill"}];

//     // const duration = Math.random()*5000;
//     // setTimeout(() => {
//     // if(duration > 0.5){
//     //     return onSuccess({data: users, statusCode: 200, error: null});
//     // } 
//     // return onFailure({data: null, statusCode: 500, error: {message: 
//     // "Something went wrong"}})}, duration);

//     return new Promise((resolve, reject) => {
//         const users = [{name: "Mayur"}, {name: "Steve"}, {name: "bill"}];

//     const duration = Math.random()*5000;
//     setTimeout(() => {
//     if(duration > 0.5){
//         return resolve({data: users, statusCode: 200, error: null});
//     } 
//     return reject({data: null, statusCode: 500, error: {message: 
//     "Something went wrong"}})}, duration);
//     });
// } 

// const userPromise = getUsersAPIPromise(/*(response) => console.log(response), (failure) => console.log(failure)*/)
// userPromise.then((responce) => console.log(responce))
// .catch((reject) => console.log(reject))
// .finally(() => console.log("It will execute every time"));

const getUsersAPIPromise = () => {
    return new Promise((response, reject) => {
         const promise1 = new Promise((response, reject) => {
            
         })
    })
}

