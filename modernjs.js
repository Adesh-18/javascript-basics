// const add = (a, b) => {
//   return a + b;
// };
// result = add(5, 10);
// short and simple way of writing a function is using arrow function
// const result = (a, b) => a + b;
// console.log(result);
// // template literals
// let name = "Adesh";

// console.log(`hello ${name}`);

// name = "arjun";
// console.log(`Hello ${name}`);

// destructuring mostly used in react extract value from the object

// const student = {
//   name: "Adesh",
//   age: 21,
// };
// const { name, age } = student;
// console.log(name);
// console.log(age);

// spread operator mostly used in react js

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4, 5];
// console.log(newNumbers);

// Array methods

// forEach()
// map()
// filter()
// find()
// reduce()
// some()
// every()

// let numbers = [1, 2, 3, 4];
// let doubled = numbers.map((num) => num * 2);
// console.log(doubled);

// let numbers1 = [1, 2, 3, 4];

// let doubled = numbers1.map((num) => num * 2);

// console.log(doubled);

// let numbers1 = [1, 2, 3, 4];

// let doubled = numbers1.map((num) => num * 2);

// console.log(doubled);


// DOM document object model 
<h1 id="title">Hello</h1>
// javascript can find it:
const title = document.getElementById("title");

// then change it using 
title.textContent = "Hello Adesh";
// this is the way javascript interact with webpages

// Events javascript can respond to user actions
button.addEventListener("click",function(){
    console.log("Button clicked");
});

// click
// submit
// input
// change
// mouseover
// keydown
button.addEventListener("submit",function()){
    console.log("Button clicked");
});

// Asynchronous javascript This is where JavaScript becomes more challenging.
// You'll eventually learn:

// Callbacks
// Promises
// async/await
// fetch()
async function getData(){
    const response = await fetch("https://example.com");
    const data = await response.json();

    console.log(data);
}

// error handling This helps handle errors without crashing the whole operation.
 try {
    console.log("not found");
 }catch (error) {
    console.log(error);
 }