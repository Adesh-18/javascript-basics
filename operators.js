// // arithmetic operator

// let a = 10;
// let b = 20;
// console.log(a + b);

// let x = 10;
// let y = 20;
// console.log(x - y);

// let e = 10;
// let f = 20;
// console.log(e * f);

// let aa = 10;
// let bb = 20;
// console.log(aa / bb);

// let xx = 10;
// let yy = 20;
// console.log(xx % yy);

// let x1 = 10;
// let y1 = 20;
// console.log(x1 - y1);

// let length = 10;
// let breadth = 20;
// console.log(length * breadth);

// // 1. Store your 5 numbers in variables
// const num1 = 10;
// const num2 = 15;
// const num3 = 20;
// const num4 = 25;
// const num5 = 30;

// // 2. Calculate the average
// const average = (num1 + num2 + num3 + num4 + num5) / 5;

// // 3. Print the result
// console.log(`The average is: ${average}`);

// // calculate simple interest
// // 1. Define your variables (you can change these numbers!)
// const principal = 10000; // The initial amount of money borrowed or invested
// const rate = 5; // The interest rate (5%)
// const time = 2; // The time period in years

// // 2. Calculate the Simple Interest
// const simpleInterest = (principal * rate * time) / 100;

// // 3. Print the result
// console.log(`Principal Amount: ${principal}`);
// console.log(`Interest Rate: ${rate}%`);
// console.log(`Time: ${time} years`);
// console.log(`Calculated Simple Interest: ${simpleInterest}`);

// Assignment operator

// let score = 100;
// score += 20;
// console.log(score);
// score -= 10;
// console.log(score);
// score *= 2;
// console.log(score);
// score /= 5;
// console.log(score);
// score %= 7;
// console.log(score);

// let balance = 1000;
// balance += 500;
// console.log(balance);
// balance -= 200;
// console.log(balance);
// balance += 1000;
// console.log(balance);
// console.log(`the final balance is:${balance}`);

// +=
// -=
// *=
// /=
// %=

// comparison operators
// let a = 20;
// let b = "20";
// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a !== b);
// console.log(a > 10);
// console.log(a < 10);
// console.log(a >= 20);
// console.log(a <= 20);

// logical operator &&, ||, and !
// let age = 21;
// let hasId = true;
// console.log(age >= 18 && hasId);
// console.log(age >= 18 || hasId);
// console.log(!hasId);

// let username = "admin";
// let password = "1234";
// if (username === admin && password === "1234") {
//   console.log("Login successful! Welcome, admin");
// }

// let age = 17;
// let hasPermission = true;
// if (age >= 18 || hasPermission === true) {
//   console.log("permission granted you may enter");
// } else {
//   console.log("Access denied");
// }

// let isLoggedIn = false;
// if (!isLoggedIn) {
//   console.log("Access denied.please log in first");
// } else {
//   console.log("Welcome back to your dashboard");
// }

let age = 22;
let hasLicense = true;
let hasCar = false;
if (age > 18 && hasLicense) {
  console.log("Can legally drive");
}
if (hascar) {
  console.log("has a car");
}
if (age >= 18 && hasLicense && hasCar) {
  console.log("Status: can drive and has a car.");
}
if ((age >= 18 && hasLicense) || hasCar) {
  console.log("status: Can drive OR has a car.");
}
