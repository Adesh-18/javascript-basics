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

let car = {
  brand: "BMW",
  model: "m4",
  year: 2022,
  start: function () {
    console.log("The car has started.");
  },
};
car.start();
