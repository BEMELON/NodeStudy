var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject(`Arguments must be numbers`);
            }
        }, 1500);
    });
};

// asyncAdd(5,`7`).then((res) => {
//     console.log(`Result: `, res);
//     return asyncAdd(res, 33);
// }, (errorMessage) => {
//     console.log(errorMessage);
// }).then((res) => {
//     console.log(`Should Be 45`, res);
// }, (error) => {
//     console.log(error);
// });
asyncAdd(5,`7`).then((res) => {
    console.log(`Result: `, res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log(`Should be 45`, res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});


// // promise features
// // resolve -> completely solve your problem
// // reject -> fail to solve your problem 
// var somePromise = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         //resolve(`Hey. It worked!`);
//         reject(`Unable to fulfill promise`); // can call just one. (resolve or reject)
//     }, 2500);
// });


// // handles somePromise
// // avoid a lot of if Statements
// somePromise.then((message) => {
//     console.log(`Success : `, message);
// }, (errorMessage) => {
//     console.log(`Error: `,errorMessage);
// });