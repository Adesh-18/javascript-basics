// ES6+ starts with Destructuring.
// Object Destructuring we already know this
// const student = {
//   name: "Adesh",
//   age: 21,
//   course: "CSE",
// };

// console.log(student.name);
// console.log(student.age);

// with destructuring take the values from the student and create variables with their names
// const { name, age, course } = student;
// console.log(name);
// console.log(age);
// console.log(course);

// same result less code
// student object
//       ↓
// take out
//       ↓
// name → "Adesh"
// age  → 21
// course → "CSE"

// const colors = ["Red", "Blue", "Green"];

// const [first, second, third] = colors;

// console.log(first);
// console.log(second);
// console.log(third);
// Object → destructure by property name
// Array  → destructure by position

// Destructuring means taking values out. You don't need to assign them again.
// const student = {
//     name:"Adesh",
//     age:21,
//     course:"CSE"
// };
// using destructuring
// const{name,course} = student;
// console.log(name);
// console.log(course);

// Array destructing
// const colors = ["Red", "Blue", "Green"];
// You normally access values like:
// Array destructuring uses position:
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);

// With destructuring:
// const [first, second, third] = colors;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(first);

// const numbers = [10, 20, 30];
// const [first, second, third] = numbers;
// console.log(first);
// console.log(second);
// console.log(third);

// Object destructuring → { name, age }
// Array destructuring  → [first, second]

// spread operator
// The spread operator is written as three dots:
// ... Its main job is to spread the contents of an array or object.
// Spread with Arrays

// Suppose:

// const fruits = ["Apple", "Mango"];
// You can create a new array containing those fruits:
// const newFruits = [...fruits, "Banana"];
// console.log(newFruits);
// fruits
//   ↓
// ["Apple", "Mango"]
//   ↓  spread ...
// "Apple", "Mango"
//   ↓
// ["Apple", "Mango", "Banana"]

// combining arrays

// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const combined = [...a, ...b];
// console.log(combined);

// spread with objects

// const student = {
//   name: "Adesh",
//   age: 21,
// };
// const updatedStudent = {
//   ...student,
//   course: "CSE",
// };
// console.log(updatedStudent);

// Important use in projects

// Spread lets you create a new array/object without modifying the original
// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4];
// console.log(newNumbers);
// Don't confuse spread with destructuring.

// Destructuring → take values OUT
// Spread        → spread values INTO something

// const fruits = ["Apple", "Mango"];
// const vegetables = [...fruits, "Carrot", "Potato"];
// console.log(vegetables);

// One more important spread use: copying an array
// const numbers = [1, 2, 3];
// Now copy is a new array.
// const copy = [...numbers];

// rest operator - The rest operator also uses three dots: ...
// Spread → expands / spreads values
// Rest   → collects values

// Rest in Functions
// Suppose you don't know how many numbers will be passed:
// function add(...numbers){
//     console.log(numbers);
// }
// add(10,20,30,40);

// Now we can use reduce():
// function add(...numbers) {
//   return numbers.reduce((sum, number) => sum + number, 0);
// }
// console.log(add(10, 20, 30));

// Rest with Destructuring
// You can also collect the remaining values:
const numbers = [10, 20, 30, 40];
const [first, ...remaining] = numbers;
console.log(first);
console.log(remaining);
