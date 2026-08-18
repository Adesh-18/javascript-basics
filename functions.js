// This is one of the most important topics in JavaScript.
// parameter → a, b
// argument  → 10, 20
// return    → sends result back
// function add(a, b) {
//   return a + b;
// }
// let result = add(10, 20);
// console.log(result);

// //  arrow functions:
// const add1 = (a, b) => {
//   return a + b;
// };
// result = add1(10, 20);
// console.log(result);
// a  block of code reuse when we wanted Create → Call → Execute
// function sayHello() {
//   console.log("Hello, JavaScript!");
// }
// sayHello();
// sayHello();
// sayHello();
// functions with parameter
// function greet(name) {
//   console.log(`Hello ${name}!`);
// }
// greet("Adesh");//Argument
// greet("Rahul");
// adding two numbers
// function add(a, b) {
//   console.log(a + b);
// }
// add(10, 20);
// add(50, 30);

// return function

// function add(a, b) {
//   return a + b;
// }
// let result = add(10, 20);
// console.log(result);
// return        → sends the value back
// function add(a, b) {
//   return a + b;
// }
// let result = add(25, 15);
// console.log(result);

// function square(num) {
//   return num * num;
// }
// let result = square(6);
// console.log(result);

// Arrow functions

// function isEven(number) {
//   if (number % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEven(10));
// console.log(isEven(7));

// arrow function

// const add = (a,b) =>{
//   return a+b;
// };
// const add = (a,b)=> a+b;

// const square =  (num) => {
//   return num*num;
// };
// arrow function remove function because it is shorter funcction

// const square = (num) => num * num;
// console.log(square(6));

// function sayHello() {
//   console.log("Hello Javascript");
// }
// sayHello();

// add two numbers
// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(5, 4));

// create a function called square
// function square(num) {
//   return num * num;
// }
// console.log(square(6));

// function isEven(number) {
//   if (number % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEven(10));
// console.log(isEven(7));

// Largest of Two Numbers
// ➡️ Function declaration
// function largest(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(largest(10, 25));

// function getName(name) {
//   return name;
// }
// console.log(getName("Adesh"));

// function calculateAge(birthYear) {
//   return 2026 - birthYear;
// }
// console.log(calculateAge(2004));
// the function stored inside a variable

// ➡️ Function expression
// const add = function (a, b) {
//   return a + b;
// };
// console.log(add(10, 20));

// arrow function
// const add = (a,b ) =>{
//     return a+b;
// }
// because only one return statement we can shorten it:
// const add = (a, b) => a + b;
// console.log(add(10, 20));

//  => when we use it value automatically returned it

// const square = (n) => n * n;
// console.log(square(2));

//both same result can be printed
// const square = n => {
//     return n * n;
// };

// default parameters
// function greet(name) {
//   console.log("Hello " + name);
// }
// greet("Adesh");

// greet()  it will print Hello undefined

// ?Default values to the functions
// function greet(name = "Guest") {
//   console.log("Hello " + name);
// }
// greet("adhiiii");

// !Function can return anything
// !numbers
// function add(a,b){
//     return a+b
// }
// !string
// function getName() {
//     return "Adesh";
// }
// !Boolean
// function isAdult(age) {
//     return age >= 18;
// }

// ~Array
// function getNumbers() {
//     return [10, 20, 30];
// }

//       ? A function can return almost any JavaScript value.

// !Function calling another function
// function square(num) {
//   return num * num;
// }
// function double(num) {
//   return num * 2;
// }
// console.log(double(square(5)));

// ! Callback functions
// function greet(name) {
//   console.log("Hello " + name);
// }
// function processUser(callback) {
//   callback("ADESH");
// }
// processUser(greet);

// greet
//   ↓
// passed to processUser
//   ↓
// callback
//   ↓
// callback("Adesh")
//   ↓
// Hello Adesh

// !A callback function is a function passed as an argument to another function and executed later.

//  ~real simple callback function
// Now imagine another function is responsible for calling sayHello()
// function sayHello() {
//   console.log("Hello");
// }
// function executefunction(fn) {
//   fn();
// }
// executefunction(sayHello);
