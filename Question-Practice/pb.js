// ## 🟢 Basic Console Usage

// 1. Create two variables: one storing your full name and another storing your favorite hobby. Print:
//    "My name is <your name> and <your hobby>".

// let a = "Swarup Das";
// let b = "Gaming";

// console.log("My name is", a, "and my favorite hobby is ", b);

// 2. Perform the arithmetic calculation `45 * 2 - 10` and print the result.

// let num1 = 45;
// let num2 = 2;
// let num3 = 10;

// console.log(num1*num2-num3);

// 3. Retrieve and print the current year using JavaScript’s `Date` object.

// let current = new Date();
// console.log(current.getFullYear());

// 4. Store your first name and last name separately and print your full name.

// let first_Name = "Swarup";
// let Last_Name = "Das";
// let Full_Name = first_Name +" " + Last_Name ;

// console.log(Full_Name);

// 5. Create a variable, print it, update it, and print again.

// let User = 'Swarup';
// console.log(User);

//  User = 'Swarup Das';

// console.log(User);

// 6. Print a custom error message using `console.error()`.

// console.error("Crirical: Database connection failed");

// 7. Store a number and print its square.

// let number = 10;

// console.log('square of given number ->',number*number);

// 8. Create a boolean variable and print it.

// let a = true;
// console.log(a);

// 9. Store your age and print whether it is greater than 18.

// let age = 15;

// if (age > 18) {
//   console.log("Yes");
// } else {
//   console.log("NO");
// }

// 10. Divide `100` by `0` and print the result.
// console.log(100/0);       // result Infinity.

// ## 🟢 Variables & Data Types

// 11. Create a variable using `let` and print it.

// let store ;
// console.log(store); //result - undefined

// 12. Declare a constant `PI = 3.14` and print it.

// const PI = 3.14;
// console.log(PI);

// 14. Print `typeof null`.

// console.log(typeof(null));  // object

// 15. Store "25" in a variable and print its type.

// const num = "25";
// console.log(typeof(num));  // string

// 16. Create a boolean and print its type.

// const boolean = false;
// console.log(typeof(boolean)); // boolean

// 17. Create a string, number, and boolean. Print all together.

// let string = "Hello from JavaScript"
// let num = 2046;
// let boolean = true;

// console.log(string,num,boolean);

// 18. Declare a variable without value and print its type.

// let variable;
// console.log(typeof(variable));

// 19. Create a variable with `undefined` and print its type.

// let a = undefined;
// console.log(typeof(a));

// 20. Create an array using `const`.
//     - Print it
//     - Try reassigning (observe error)
//     - Push a new value and print updated array.

// const arr = [1, 2, 3, 4, 5];
// console.log(arr);

// // arr = ["das", 2046];
// // console.log(arr);    // “A const variable cannot be reassigned, which is why the console throws an error.”

// arr.push("Swarup Das");
// console.log(arr);

// ## 🟢 Loops

// 21. Print numbers from 1 to 50 using `for`.

// for (let i = 1; i < 51; i++) {
//   console.log(i);
// }

// 22. Using `while`, calculate sum from 1 to 10.
// let i = 1;
// let sum = 0
// while (i<=10) {
//     sum += i;
//     i++;
// }
// console.log(sum);

// 23. Use `for...of` to print each character of "JavaScript".

// let language = "JavaScript";

// for (const elem of language) {
//   console.log(elem);
// }

// 24. Print odd numbers from 1–20 using `continue`.

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// 25. Use `do...while` to print 5 to 1.
// let i = 5;
// do {
//   console.log(i);
//   i--;
// } while (i >= 1);

// 26. Calculate factorial of 5.
// let factorial = 1;
// for (let i = 1; i <6; i++) {
//         factorial = factorial * i
// }
// console.log('factorial of  5 is -->',factorial);

// 29. Print numbers from 1–100 divisible by 5 using `while`.
// let i = 1;
// while (i <= 100) {
//   if (i % 5 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// 30. Create object `{name, age}` and print keys using `for...in`.

// let obj = { name: "swarup Das", age: 22 };
// for (const key in obj) {
//   console.log(key);
// }

// 31. Check if number is positive or negative.

// let number = 0;

// if (number === 0) {
//   console.log("neutral number");
// } else if (number >= 1) {
//   console.log("positive");
// } else {
//   console.log("negative");
// }

// 32. Print "Adult" if age ≥18 else "Minor".

// const Age = 14;
// if (Age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }

// 34. Find greater between two numbers.

// let a = 20;
// let b = 45;

// if (a>b ) {
//     console.log('greater is',a);
// }else{
//     console.log('greater is',b);

// }

// 35. Score grading:
// - ≥90 Excellent
// - ≥70 Good
// - Else Needs Improvement

// let Score = 85;

// if (Score >= 90) {
//   console.log("Excellent");
// } else if (Score >= 70) {
//   console.log("Good");
// } else {
//   console.log(" Needs Improvement");
// }

// 36. Check leap year.

// let year = 2028;

// if ((year % 4 === 0 && year % 100 !==0) || (year % 400===0)) {
//   console.log(year, "is leapyear");
// } else {
//   console.log(year, "not a leapyear");
// }

// 37. Check vowel or consonant.

// let character = 'I';
// console.log(typeof(character));

// if ((character=="a" || character=='A') ||( character=="e" || character=='E') || (character=="i" || character=='I') || (character=="o" || character=='O') || (character=="u" || character=='U')) {
//     console.log(character, 'is vowel');
// }
// else{
//     console.log(character, 'is Consonant');

// }

// 38. Find largest of three numbers.

// let num1 = 80;
// let num2 = 80;
// let num3 = 80;

// if (num1 === num2 && num2 === num3) {
//   console.log(num1, num2, num3, "this are equal number");
// } else if (num1 > num2 && num1 > num3) {
//   console.log("largest number is -->", num1);
// } else if (num2 > num1 && num2 > num3) {
//   console.log("largest number is -->", num2);
// } else {
//   console.log("largest number is -->", num3);
// }

// 39. Password validation (`admin123`).

// let Password = prompt("Enter Password here");

// if (Password === `admin123`) {
//     console.log('valid');
// }else{
//     console.log('Invalid');

// }

// 49. Print pattern:

// *
// **
// ***
// ****
// *****

// let num = 5;
// for (let i = 1; i <= num; i++) {
//   let row = "";

//   for (let j = 0; j < i; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

// 50. Find sum of array:

// ```js
// [10, 20, 30, 40]
// ```

// let arr = [10, 20, 30, 40];
// let sum = 0;
// for (const elem of arr) {
//     sum = sum + elem
// }
// console.log(sum);

// 48. Find largest in `[3,7,2,9,5]`.

// let big = 0;
// let arr = [3, 7, 2, 9, 5];

// for (const elem of arr) {
//   if (big < elem) {
//     big = elem;
//   } 
// }
// console.log(big);
