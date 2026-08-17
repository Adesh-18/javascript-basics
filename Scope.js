// Global scope
// Function scope
// Block scope

// let
// const
// name is outside the function, so it can be accessed inside the function.
// Global = available broadly.
// let name = "Adesh";
// function greet() {
//   console.log(name);
// }
// greet();

// Function Scope
function test() {
  let age = 21;
  console.log(age);
}
// age exists inside the function.
// Function scope = available inside that function.
test();

// Block Scope A block is anything inside { }, such as an if statement or loop.
if (true) {
  let message = "Hello";
  console.log(message);
}
// Important rule
// let and const are block scoped.

// if (true) {
//     let x = 10;
//     const y = 20;
// }

// x and y cannot be accessed outside that block.
