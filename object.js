// #objects are used in js  mostly and it is in key value pairs
// Array → ordered list

// Object → named information
// const student = {
//   name: "Adesh",
//   age: 21,
//   course: "Cse",
// };
// console.log(student);

// combining array and objects
// This structure is everywhere in APIs and React applications.
// const students = [
//   {
//     name: "Adesh",
//     age: 21,
//   },
//   {
//     name: "Rahul",
//     age: 22,
//   },
// ];
// console.log(students);
// Objects are useful when different pieces of information belong to one thing.
// const student = {
//   name: "Adesh",
//   age: 21,
//   course: "CSE",
// };
// . notation dot
// console.log(student.name);
// Bracket notation
// console.log(student["name"]);
// Objects are mutable.
// Even though student is const, we can change its properties.
// student.age = 22;
// console.log(student.age);
// Adding a New Property
// student.college = "Qis";
// console.log(student);
// Deleting a Property
// delete student.age;
// console.log(student);

const student = {
  name: "Adesh",
  age: 21,
  course: "CSE",
};
console.log(student.name);
console.log(student.age);
student.age = 22;
student.college = "Qis";
console.log(student);
