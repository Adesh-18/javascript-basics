// An array stores multiple values inside one variable.
// JavaScript arrays use zero-based indexing.
// const skills = ["HTML", "CSS", "JS"];
// console.log(skills);

// push()
// pop()
// map()
// filter()
// find()
// forEach()
// reduce()
// const fruits = ["Apple", "mango", "Banana"];
// console.log(fruits);

// empty array and add values later
// const fruits = [];

//Array length
// const fruits = ["Apple", "Mango", "Banana"];

// console.log(fruits.length);

// //Changing an Array Element Even though fruits is declared with const, we can modify its contents.
// // But we cannot replace the entire array: fruits = ["Orange"]; // ❌
// const fruits = ["Apple", "Mango", "Banana"];

// fruits[1] = "Orange";

// console.log(fruits);

// const colors = ["Red", "Blue", "Green", "Yellow"];

// console.log(colors[0]);
// console.log(colors[2]);
// console.log(colors.length);
// colors[1] = "Black";
// console.log(colors);
// console.log(colors);

// push() and pop() push add at the end of the array

// const colors = ["Red", "Blue", "Green"];
// colors.push("White");
// console.log(colors);
// console.log(colors.length);
// colors.pop();
// console.log(colors);

// pop removes from the end push → ➕ end
// pop  → ➖ end

// const fruits = ["Apple", "Mango"];
// fruits.push("Banana");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

// shift() and unshift()
// work on the beginning of an array

// const fruits = ["Apple", "Mango","Banana"];
// fruits.unshift("orange");
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// push()    → add at end
// pop()     → remove from end
// unshift() → add at beginning
// shift()   → remove from beginning

// indexOf() and includes()

// const fruits = ["Apple", "Mango", "Banana"];
// console.log(fruits.includes("Mango"));
// console.log(fruits.includes("Orange"));
// console.log(fruits.indexOf("Mango"));
// console.log(fruits.indexOf("Orange"));

// includes() → Does it exist?
// indexOf() → Where is it?
// -1 → Not found

// const fruits = ["Apple", "Mango", "Banana"];
// console.log(fruits.includes("Banana"));
// console.log(fruits.includes("Orange"));
// console.log(fruits.indexOf("Apple"));

// push()       → add at end
// pop()        → remove from end
// unshift()    → add at beginning
// shift()      → remove from beginning
// includes()   → check if value exists
// indexOf()    → find position
// length       → number of elements

// forEach() run code for every element in an array

// const fruits = ["Apple", "Mango", "Banana"];
// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });

// const numbers = [10, 20, 30, 40, 50];
// // numbers.forEach(function (numbers) {
// //   console.log(numbers);}
// numbers.splice(1, 1);
// console.log(numbers);
// map takes every element changes it and gives you new array map = transform → new array
// const numbers = [10, 20, 30];
// const double = numbers.map(function (number) {
//   return number * 2;
// // });
// // console.log(double);
// forEach() → performs an action
// map()     → transforms data and returns a new array

// const prices = [100, 200, 300, 400];
// const gstPrices = prices.map(function (price) {
//   return price + (price * 10) / 100;
// });
// console.log(gstPrices);

// map() → transform

// filter() → select

// const numbers = [10, 15, 20, 25, 30];
// const result = numbers.filter(function (number) {
//   return number > 20;
// });
// console.log(result);

// const numbers = [10, 15, 20, 25, 30, 35, 40];
// const even = numbers.filter(function (numbers) {
//   return numbers % 2 == 0;
// });
// console.log(even);

// reduce()

// reduce() is used when you want to turn an array into one final value.

// const numbers = [5, 10, 15];
// const total = numbers.reduce(function (sum, number) {
//   return sum + number;
// }, 0);
// console.log(total);
// Array methods you've learned
// forEach() → do something with each item
// map() → transform every item
// filter() → select matching items
// reduce() → combine into one value
// push() / pop()
// shift() / unshift()
// includes() / indexOf()
// splice()
