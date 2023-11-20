// console.log("Start");

//& What is Synchronous Programming?
//* -Code executes line by line, waiting for each operation to complete before moving to the next.
//* -Each task must finish before the next one starts, potentially causing delays.
//* -Easier to predict the flow of execution due to its linear nature.


//! Example 1
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");

//! Example 2
// function syncFunction() {
//   console.log("Task 1");
//   console.log("Task 2");
//   console.log("Task 3");
// }
// syncFunction();

//! Example 3
// var x = 10;
// console.log("x: ", x);

// syncFunction(x);

// console.log("End");

// function syncFunction(a) {
//   console.log("a: ", ++a);
// }

//x: 10
//a: 11
//End

//x: 10
//End
//a: 11

// var x =1000

// //x = 1000
// console.log(x++);  // 1000
// console.log(++x);  // 1000
// //1001
// console.log(--x + ++x); //1000 + 1001

//1000
//2001


//! Example 4:
// for(let i=0;i<=20000000000;i++){
//     //Nothing just running a loop
// }
// console.log("Loop Ended");


























//& What is Asynchronous Programming?
//* -Allows multiple operations to execute simultaneously without waiting for each other.
//* -Uses callbacks, promises,async/await or user interaction events to handle asynchronous tasks.
//* -Efficient than sync code

//! Example 0:
// setTimeout(function(){
//     for(let i=0;i<=20000000000;i++){
//         //Nothing just running a loop
//     }
// },120)

// console.log("Loop Ended");

//! Example 1:
// console.log('Task 1');
// setTimeout(() => {
//   console.log('Task 2');
// }, 2000);
// console.log('Task 3');

// 1 3 2

//! Example 2:
// for (let i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i*1000);
// }

// 12345
//! Example 3:
// for (var i = 0; i <= 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }
// 12345


//! Example 4:
// setTimeout(function() {
//     console.log('First');
//     setTimeout(function() {
//       console.log('Second');
//       setTimeout(function() {
//         console.log('Third');
//       }, 1000);
//     }, 1000);
//   }, 1000);






























//& What is CallBack Function?
//* -A callback function is a function passed as an argument to another function.
//* - It gets executed or called by the higher-order function at a specific time or condition.
//* -Often used in scenarios like event handling or asynchronous tasks to ensure certain actions are taken upon completion.

//! Example 1 (event handling for user interactions.)
// function handleClick() {
//   console.log("Button clicked!");
// }

// document.getElementById("myButton").addEventListener("click", handleClick);

//! Example 2
// function Greeting(name, callback) {
//     console.log("callback: ", callback);
//     console.log("name: ", name);
//   callback(name);
// }
// function greet(message) {
//   console.log("My name is : "+message);
// }
// Greeting("Dwij", greet);

// 184 -> 178 -> 179 => 181 -> 182

//! Example 3
function delayedGreeting(name, callback) {
//   setTimeout(function () {
//     callback(name);
//   }, 2000);
    if(name == "yaseen") callback(name)
    else console.log("name is not yaseen");
}

function greet(message) {
  console.log("My name is : "+message);
}

delayedGreeting("Yaseen", greet);
