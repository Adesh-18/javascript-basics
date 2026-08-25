// DOM  (Document Object Model)This is where JavaScript starts controlling your HTML page

// example
{
  /* <h1 id="title">Hello</h1> */
}

// HTML = structure
// CSS = appearance
// JavaScript = behavior
// const title = document.getElementById("title");
// title.textContent = "Hello Adesh";

// When the browser loads your HTML, it creates a structure that JavaScript can access and change.

{
  /* <h1 id="title">Hello</h1>
<p id="message">Welcome</p> */
}
const title = document.getElementById("message");
message.textContent = "Welcome prathyu";
// HTML
//  ↓
// Browser creates DOM
//  ↓
// JavaScript accesses DOM
//  ↓
// JavaScript changes the page

// getElementById()
// ex:

// h1 id = "title"><hello/h1>
// Find the HTML element whose id is "title".
// const title = document.getElementById("title");
// console.log(title);
// Then you can change its text:
// title.textContent = "Hello Adesh";

{
  /* <h1 id="heading">JavaScript</h1> */
}
// const heading = document.getElementById("heading")
// heading.textContent = "I am learning JavaScript"
// document
//    ↓
// getElementById()
//    ↓
// HTML element
//    ↓
// change it

// DOM concept: querySelector()

// querySelector() is more flexible than getElementById().
{
  /* <h1 id="heading">JavaScript</h1>
<p class="message">Hello</p> */
}

// #heading → id
// .message  → class

{
  /* <h1 id="title">Hello</h1>
<p class="description">Learning JavaScript</p>

const title = document.querySelector("#title");
title.textContent = "javaScript DOM";
const description = document.querySelector(".description");
description.textContent = "I am learning DOM"; */
}

// querySelectorAll()
// querySelector() gets one element.

// querySelectorAll() gets all matching elements.

{
  /* <p class="item">Apple</p>
<p class="item">Mango</p>
<p class="item">Banana</p> */
}
// Now items contains all three <p> elements.
// const item = document.querySelectorAll(".item");
// console.log(items);

// items.forEach(function (item) {
//   item.style.color = "red";
// });

{
  /* <p class="item">Apple</p>
<p class="item">Mango</p>
<p class="item">Banana</p>

const item = document.querySelectorAll(".item");
console.log(item)

item.forEach(function(item){
    item.textContent = "I love JavaScript";
}); */
}
// querySelectorAll() → gets all matching elements
// forEach()          → loops through them
// textContent =      → changes their text

// DOM concept: Events This is where DOM becomes interactive.
// User clicks button → JavaScript runs code.

// An event is something that happens on the webpage.
// click
// typing
// mouse movement
// form submission
// keyboard press
// JavaScript can listen for an event and run code when it happens

// addEventListener()

{
  /* <button id="btn">Click Me</button> */
}

// const button = document.querySelector("#btn");
// button.addEventListener("click", function () {
//   console.log("Button clicked!");
// });
// User clicks button
//         ↓
// "click" event happens
//         ↓
// function runs
//         ↓
// "Button clicked!" appears

// const button = document.querySelector("#btn");
// button.addEventListener("click", function () {
//   console.log("Button clicked");

//   element.addEventListener("event", function() {
//     // code to run
// // });
// });

{
  /* <button id="btn">Click Me</button>;

const button = document.querySelector("#btn");
button.addEventListener("click", function () {
  button.textContent = "Welcome to JavaScript!";
}); */
}

// DOM concept: Changing CSS
// JavaScript can change the style of an HTML element.
{
  /* <h1 id="title">Hello</h1>
   */
}
// const title = document.querySelector("#title");
// element.style.property = "value";
// title.style.color = "blue";
// title.style.fontSize = "40px";

// CSS:

// background-color

// JavaScript:

// backgroundColor
// JavaScript uses camelCase for CSS properties.

<h1 id="title">JavaScript</h1>;
const title = document.querySelector("#title");
title.style.color = "red";
title.style.fontSize = "40px";

// getElementById() ✅
// querySelector() ✅
// querySelectorAll() ✅
// textContent ✅
// forEach() with DOM elements ✅
// addEventListener() ✅
// Changing styles with .style ✅

// Getting Input Values

// real projects need to read what the user types
{
  /* <input id="nameInput" type="text">
<button id="btn">Submit</button>

const input = document.querySelector("#nameInput");
const button = document.querySelector("#btn");
button.addEventListener("click",function(){
    console.log(input.value);
}); */
}

// Form submission
// One important improvement: instead of listening to a button's click, forms normally use the submit event.

{
  /* <form id="form">
    <input id="name" type="text">
    <button type="submit">Submit</button>
</form>

{/* Instead of listening to the button's click, we listen to the form's submit
 */
}

// const form = document.querySelector("#form");
// const nameInput = document.querySelector("#name");

// form.addEventListener("submit", function(event){
// preventDefault() Normally, when you submit a form, the browser may reload the page
// "Don't perform the browser's default form submission. Let my JavaScript handle it."
// event.preventDefault();
//   }console.log(nameInput.value);
// }) */

{
  /* <form id="form">
    <input id="name" type="text">
    <button type="submit">Submit</button>
</form>

const form = document.querySelector("#form");
const input = document.querySelector("#name");

form.addEventListener("submit",function(event){
  event.preventDefault();
  console.log(input.value);
}); */
}

// DOM concept: Form Validation

// if (input.value === "") {
//   console.log("please enter your name");
// } else {
//   console.log(`Hello ${input.value}`);
// }
// User clicks Submit
//        ↓
// preventDefault()
//        ↓
// Is input empty?
//    ↙          ↘
//  YES           NO
//  ↓             ↓
// Error       Use the name

// Selecting elements
// getElementById()
// querySelector()
// querySelectorAll()
// textContent
// .value
// .style
// addEventListener()
// Click events
// Submit events
// preventDefault()
// Basic form validation
// forEach() with DOM elements
if (input.value === "") {
  console.log(`Welcome ${input.value}!`);
} else {
  console.log(`Hello ${input.value}`);
}
const form = document.querySelector("#form");
const input = document.querySelector("#name");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (input.value === "") {
    console.log("Name is required");
  } else {
    console.log(`Welcome, ${input.value}!`);
  }
});
