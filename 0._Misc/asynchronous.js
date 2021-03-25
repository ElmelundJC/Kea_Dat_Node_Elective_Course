// why we need asynchronous code
// when we need it

// Promises
// can be in 2 different states:
// * Pending - WIP (Work in progress)
// * fulfilled 
    // when something is fulfilled it can be in 2 different states:
        // * resolved
        // * rejected


// new Promise((resolve, reject) => {
//     resolve("Everything went well.");
// }).then(message => {
//     console.log(message);
// });

// // after it resolves... then i does something .... because promise implement the then() method.


// // how do we execute code after 4 seconds ??? 
// // setTimeout(() or 
// setInterval(() => {
//     console.log("time has passed");
// }, 4000);


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Everything went well.");
//     }, 4000);
// }).then(message => {
//     console.log(message);
// });


// Working with reject
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("Everything went well.");
//         reject("Something went wrong.");
//     }, 4000);
// }).then(message => {
//     console.log(message);
// }).catch(errorMessage => {
//     console.log(errorMessage);
// });

// look at the above and then try without leaning too much on it too...
//create a new primise that resolves with "Happy days are stating."
// Bonus: you may implement a reject


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Happy days are stating.");
//         // never have both resolve and reject -- explanation later
//     }, 4000);
// }).then(message => {
//     console.log(message);
// }).catch(errorMessage => {
//     console.log(errorMessage);
// });




// wrapping a function with a Promise

function myPromiseFunction() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve("Everything went well.");
            }, 3000);
        } catch {
            reject("Every Promise doesn't work out this way.");
        }
    });
};


// non-blocking IO -- this is the core what node is.
// call the function and handle the promises externally...

// myPromiseFunction()
// .then(message => console.log(message))
// .catch(message => console.log(message));

// promises are just syntactical sugar of callbacks
// async / await

// the idea about async / await is:
// gives the syntaxError: await is only valid in async function
// await needs to be encapsulated by an async function

// await means - dont run line 102 befor the await function is resolved.

// async function asyncCall(){
//     const message = await myPromiseFunction();
//     console.log(message);
// }
// // can be tested
// asyncCall();

// advanced! if we wrap it in parenthesis, that means we can call it directly and also it wont be callable outside its own scope. ex:

(async function asyncCall(){
    const message = await myPromiseFunction();
    console.log(message);
})()

