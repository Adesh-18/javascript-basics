// let a = 2;
// let b = String(a);
// let c = Boolean(a);
// let d = "abc";
// let e = "122";
// let f = Number(d);
// let g = Number(e);

// console.log(typeof c);
// console.log(b);
// console.log(typeof b);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof g);
//string concatenation
// let a = "hello";
// let b = "world";
// let c = a + " " + b;
// console.log(c);

// conditionals statements
// an  object is a collection of key value pairs storing data in a structured way think of an object data together
// example of name age college course
// instead of creating diiferent variables we  are creating an object to store all the data together
// an object may contain string number boolean array or even another object as its value
// let student = {
//   name: "Adesh",
//   age: 22,
//   college: "ABC College",
//   course: "B.Tech",
//   isGraduated: false,
// };
// console.log(student.name);
// console.log(student.age);
// console.log(student.college);
// console.log(student.course);
// console.log(student.isGraduated);
// an object can also have a function when a function belongs to an object,we usually call it a method of that object
// let student = {
//   name: "Adesh",
//   age: 22,

//   greet: function () {
//     console.log(
//       "Hello, my name is " + this.name + " and I am " + this.age + "years old.",
//     );
//   },
// };
// student.greet();

// let car = {
//   brand: "BMW",
//   model: "m4",
//   year: 2022,
//   start: function () {
//     console.log("The car has started.");
//   },
// };
// car.start();

// Create variables for your name, age, and college

// const name = "adesh";
// const age = 21;
// const college = "QIS";
// console.log(`name: ${name}, Age: ${age}, college: ${college}`);

// let a = 20;
// let b = 20;
// let sum = a + b;
// console.log(`sum: ${sum}`);

// let x = 20;
// let y = 10;
// console.log(`Before swap: x = ${x}, y = ${y}`);

// let temp = x;
// x = y;
// y = temp;
// console.log(`After Swap: x = ${x}, y = ${y}`);

// // Store length and width, then calculate area
// let length = 15;
// let width = 10;
// let area = length * width;
// console.log(`Area: ${area}`);

// // 5. Store price and quantity, then calculate total price

// let price = 50;
// let quantity = 3;
// let totalPrice = price * quantity;
// console.log(`Total Price: ${totalPrice}`);
// const → value won't change
// let → value may change

const productName = "Laptop";
const ProductPrice = 50000;
let quantity = 2;
const total = ProductPrice * quantity;
console.log(`totalBill:${total}`);

let length = 20;
let width = 8;
// calculate the area
let area = length * width;
// calculate the perimeter
let perimeter = 2 * (length + width);
console.log(`Area: ${area}`);
console.log(`Perimeter: ${perimeter}`);

const marks1 = 80;
const marks2 = 75;
const marks3 = 90;
const average = (marks1 + marks2 + marks3) / 3;
console.log(`Average Marks: ${average}`);

// swap two variable using third variable
let a = 100;
let b = 200;
console.log(`before swap: a ${a}, b${b}`);
let temp = a;
a = b;
b = temp;
console.log(`swap after a: ${a}, b: ${b}`);

const name = "Adesh";
const age = 21;
const course = "cse";
const college = "QIS";
console.log(`name:${name},age:${age},course:${course},college:${college}`);
