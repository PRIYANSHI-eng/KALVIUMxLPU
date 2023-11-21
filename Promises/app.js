//? ----------------------------------------------------------------------------------------------
//^ What are Promises ?
//* - Just like when you promise your friend something that you'll do with them later.
//* - Promises represent a value that might not be available yet but will be available in future, typically used for handling asynchronous operations.
//* - Helps manage async tasks,Promises are often used for tasks that take some time to finish, like loading data from the internet or doing calculations,etc.
//* - 3 phases:
//* -        1) PENDING (inital state) (compulsory)
//* -        2) RESOLVED (promise is kept/done)
//* -        3) REJECTED (promise is broken)
//* - it takes 2 arguments resolve and reject in a callback function(also called Executor).

//? ----------------------------------------------------------------------------------------------
//^ SYNTAX of a PROMISE
// let myPromise = new Promise((resolve, reject) => {
//   let x = 1 + 1;
//   if (x == 2) {
//     resolve("OK");
//   } else {
//     reject("x is not 2");
//   }
// });
// console.log("myPromise: ", myPromise);

//? ----------------------------------------------------------------------------------------------

//^ How to resolve/reject a Promise or How do we Interact with Promises?
//* - .then to do something when the promise is "resolved"
//! - .catch to do something when the promise is "rejected"

// myPromise
//   .then((res) => console.log("res: ", res))
//   .catch((err) => console.log("err: ", err));

// myPromise
//   .then((res) => {
//     console.log("res: ", res);
//   })
//   .catch((err) => {
//     console.log("err: ", err);
//   });

//? ----------------------------------------------------------------------------------------------

//! - Example 1 (Also an example of how to take arguments inside a promise)
// const delay = (milliseconds) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Waited for ${milliseconds} milliseconds`);
//     }, milliseconds);
//   });
// };

// delay(2000)
//   .then(message => {
//     console.log(message);
//   })
//   .catch(error => {
//     console.error(error);
//   });

//? ----------------------------------------------------------------------------------------------

//! - Example 2
// const checkNumber = (number) => {
//   return new Promise((resolve, reject) => {
//     if (number == 10) {
//       resolve('Number is 10!');
//     } else {
//       reject('Number is not 10');
//     }
//   });
// };

// checkNumber(10)
//   .then(message => {
//     console.log(message);
//   })
//   .catch(error => {
//     console.error(error);
//   });

//? ----------------------------------------------------------------------------------------------

//! -Example 3
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Errrrrrrrrrrrrrrrrrrrrrrror! ');
//   }, 1000);
// });

// promise.catch(error => {
//   console.log(error); // "Error!"
// });

//? ------------------------------------------------------------------------------------------------

//! - Example 4
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Hello, World!');
//   }, 1000);
// });

// promise.then(message => {
//   console.log(message); // "Hello, World!"
// });

//? ------------------------------------------------------------------------------------------------

//^ Promise.all (Only show the resolved Promise)

// const promise1 = new Promise((resolve, reject) => {
//   resolve("Promise 1 Resolved");
// });
// const promise2 = new Promise((resolve, reject) => {
//   resolve("Promise 2 Resolved");
//   // reject("Promise 2 Rejected")
// });
// const promise3 = new Promise((resolve, reject) => {
//   resolve("Promise 3 Resolved");
// });

// Promise.all([promise1,promise2,promise3]).then((result)=>{
//   console.log("result: ", result);
// })

//? ----------------------------------------------------------------------------------------------

//^ Promise.allSettled (Will Show Resolved and Rejected )
// Promise.allSettled([promise1, promise2, promise3]).then((result) => {
//   console.log("result: ", result);
//   result.forEach((curr) => {
//     if (curr.status == "fulfilled") {
//       console.log(curr.value);
//     } else {
//       console.log(curr.reason);
//     }
//   });
// });

//? ----------------------------------------------------------------------------------------------

//^ FETCH
//* - Fetch is a way for your computer/file (your code) to ask another computer/file (like a website/file/backend) for information or data.
//* - When your computer asks for something using Fetch, it waits patiently for the other computer to send the information back.
//* - Once Fetch brings back the information, your code can then do things with it, like showing it on a webpage or using it to do other tasks.
//* - Its similar to a promise
//* - Fetch returns a promise then again we have to resolve it using then.
//* - .json() converts raw data to useable JS object

//^ Syntax
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())  //fetch returns a promise that we need to resolve it again
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Error fetching data:", error));

//? ----------------------------------------------------------------------------------------------

//^ What are these Websites Called?
//* - These are called APIs
//* - APPLICATION PROGRAM INTERFACE
//* - It's a set of rules, protocols, and tools that allows different software applications to communicate with each other.
//* - Making it easier for developers to use certain functionalities or access specific data from other applications or services without needing to understand their internal workings.
//* - They Contain a bunch of Info in form of JSON objects that we can use
//* - Some are free and Some are Paid and Some need Access code to access those data

//? ----------------------------------------------------------------------------------------------

//~ Some other API URL Examples
//! 1)
// Base URL: https://jsonplaceholder.typicode.com
// Endpoints: /users, /users/1, /posts, /todos, etc.
//! 2) Pokemon API
// Base URL: https://pokeapi.co/api/v2
// Endpoints: /pokemon, /ability, /type, etc.
//! 3)
// Base URL: https://randomuser.me/api/

//? ----------------------------------------------------------------------------------------------
//^ What is Async and Await ?
//* - A modern way to work with asynchronous JavaScript Promise codes.
//* - It provides a more readable and cleaner syntax for managing promises.
//* - The Async keyword is used to create functions that implicitly return/uses a promise inside it.
//* - The Await keyword is used to pause the execution of an async function until a promise is settled (resolved or rejected).

//? ----------------------------------------------------------------------------------------------

//^ What is Try and Catch Block?
//* - ".then and .catch" is replaced by "try and catch" block here.

//? ----------------------------------------------------------------------------------------------

//^Syntax
// const fetchData = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };
// fetchData();

//* Lets Write in Normal Way
// function fetchData(){

// }
// fetchData()

//? ----------------------------------------------------------------------------------------------

//! Example 1
// const delay = (milliseconds) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Waited for ${milliseconds} milliseconds`);
//     }, milliseconds);
//   });
// };

// const executeDelay = async () => {
//   try {
//     const message = await delay(2000);
//     console.log(message);
//   } catch (error) {
//     console.error(error);
//   }
// };

// executeDelay();

//! Example 2
// const checkNumber = (number) => {
//   return new Promise((resolve, reject) => {
//     if (number === 10) {
//       resolve('Number is 10!');
//     } else {
//       reject('Number is not 10');
//     }
//   });
// };

// const executeCheckNumber = async () => {
//   try {
//     const message = await checkNumber(10);
//     console.log(message);
//   } catch (error) {
//     console.error(error);
//   }
// };

// executeCheckNumber();

//! Example 3
// const executePromiseReject = async () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Errrrrrrrrrrrrrrrrrrrrrrror!");
//     }, 1000);
//   });

//   try {
//     await promise;
//   } catch (error) {
//     console.log(error); // "Errrrrrrrrrrrrrrrrrrrrrrror!"
//   }
// };

// executePromiseReject();

//! Example 4
// const executePromiseResolve = async () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Hello, World!');
//     }, 1000);
//   });

//   try {
//     const message = await promise;
//     console.log(message);
//   } catch (error) {
//     console.log("error: ", error);
//   }
// };

// executePromiseResolve();

//! Example 5 (Async function to simulate a data processing task)
// const processData = async () => {
//   try {
//     const result1 = await someAsyncTask1();
//     const result2 = await anotherAsyncTask2(result1);
//     console.log('Final result:', result2);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// const someAsyncTask1 = () => {
//   return new Promise(resolve => setTimeout(() => resolve('Task 1 completed'), 1000));
// };

// const anotherAsyncTask2 = (data) => {
//   return new Promise((resolve, reject) => {
//     if (data) {
//       setTimeout(() => resolve(`Task 2 received: ${data}`), 1500);
//     } else {
//       reject('Task 2 failed due to missing data');
//     }
//   });
// };

// processData();

//todo -------------------------XXXXXXXXXXXXXXXXXXXXXX--------------------------------------
