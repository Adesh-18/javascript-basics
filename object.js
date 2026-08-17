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

// const student = {
//   name: "Adesh",
//   age: 21,
//   course: "CSE",
// };
// console.log(student.name);
// console.log(student.age);
// student.age = 22;
// student.college = "Qis";
// console.log(student);
// nested objects  Real-world objects often contain objects inside them.
// const student = {
//   name: "Adesh",
//   age: 21,
//   address: {
//     city: "Ongole",
//     state: "Andhra pradesh",
//   },
// };
// console.log(student.name);
// student → address → city
// console.log(student.address.city);
// console.log(student.address.state);

// Arrays of Objects Instead of one student:
// We can have many students:
// const students = [
//   {
//     name: "Adesh",
//     age: 21,
//     course: "Cse",
//   },
//   {
//     name: "prathyu",
//     age: 22,
//     course: "Cse",
//   },
//   {
//     name: "Arjun",
//     age: 21,
//     course: "AIML",
//   },
// ];
// students[0]       → first object
// students[0].name  → name inside that object
// console.log(students[1].name);

// Object.keys(), Object.values(), Object.entries()

// These are useful when you want to inspect an object's data.
// keys → property names
// values → property values
// entries → key + value pairs
// const student = {
//   name: "Adesh",
//   age: 21,
//   course: "CSE",
// };
// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));
