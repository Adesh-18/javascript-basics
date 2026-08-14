// for loops and whileloops

// let i = 1   → starting point
// i <= 5      → condition
// i++         → update

// for
// while
// do...while
// for...of
// for...in

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// for (initialization; condition; update){}
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// for (let i = 2; i >= 20; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
//   console.log(sum);
// }

// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(5 * i);
// }
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let i = 1       → Start
// i <= 5          → Keep going while true
// i++             → Increase by 1

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }

// while loops
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// Check → Run → Update → Check again
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i = 5;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// let i = 2;
// while (i <= 10) {
//   console.log(i);
//   i += 2;
// }

// do...while  do...while runs at least once, then checks.
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// while      → check first → then run
// do...while → run first → then check
// let i = 10;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);
// while:
// Check → Run

// do...while:
// Run → Check

// let i = 22;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// for (let i = 1; i < 10; i++) {
//   if (i == 7) {
//     break;
//   }
//   console.log(i);
// }
// break stops when execution done
// for (let i = 1; i <= 10; i++) {
//   if (i == 7) {
//     break;
//   }
//   console.log(i);
// }

// continue skip the current iteration here 3 skip in the iteration
// for (let i = 1; i <= 5; i++) {
//   if (i == 3) {
//     continue;
//   }
//   console.log(i);
// }
// break     → 🛑 STOP
// continue  → ⏭️ SKIP

// for (let i = 1; i <= 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }

// Nested Loops a loop inside another loop

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(i, j);
//   }
// }
// for (let i = 5; i >= 1; i--) {
//   let row = "";

//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }

//   console.log(row);
// }

// let sum = 0;
// for (let i = 2; i <= 20; i += 2) {
//   sum += i;
// }
// console.log(sum);
// let count = 0;
// for (let i = 5; i <= 50; i++) {
//   if (i % 5 == 0) {
//     count++;
//   }
// }
// console.log(count);

let count = 0;
for (let i = 1; i < 100; i++) {
  if (i % 3 == 0) {
    count++;
  }
}
console.log(count);
