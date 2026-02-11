// 1.  Write a function that prints "Hello World".

// function hello() {
//   console.log("hello World");
// }
// hello();

// 2.  Write a function that adds two numbers and returns the result.

// function sum(num1, num2) {
//   return num1 + num2;
// }
// console.log('the sum is ->', sum(5, 2));

// 3.  Write a function that takes a name as a parameter and prints it.

// function Name(FullName){
//     console.log(FullName);

// }
//     Name("Shivani Pathak")

// 4.  Create a function that returns the square of a number.

// function square(num1) {
//   return num1 * num1;
// }
// console.log(square(5));

// 5.  Write a function that checks if a number is even.

// let even = (num) => {
//   if (num % 2 == 0) {
//     console.log(num, "is even number");
//   }
// };
// even(4);

// 6.  Create a function that returns the last character of a string.
// let character = (str) => {
//   return str[str.length - 1];
// };
// console.log(character("Shivani pathak"));

// 7.  Write a function that returns the first element of an array.

// let element = (arr) => {
//   return arr[0];
// };
// console.log(element([100, 2, 57, 89, 3]));

// 8.  Write a function that returns the last element of an array.

// let element = (arr) => {
//   return arr[arr.length-1];
// };
// console.log(element([100, 2, 57, 89,300]));

// 10. Write a function that returns the length of an array.

// let element = (arr) => {
//   return arr.length;
// };
// console.log(element(['swarup','shivani','deep','abir','sanchita',2046,true,false]));

// 11. Write a function declaration that multiplies two numbers.

// function multiplies(num1,num2) {
//   console.log(num1*num2);
// }
// multiplies(10,2)

// 12. Write a function expression that subtracts two numbers.

// let expression = function(num1,num2){
//       return num1-num2
// }
// console.log(expression(50,10));

// 13. Write an arrow function that converts a string to uppercase.

// let arrow = (str)=>{
//      return str.toUpperCase()
// }
// console.log(arrow('swarup'));

// 14. Write an arrow function that calculates a number's cube.

// let calculates = (num)=> num*num*num
//   console.log(calculates(3));

// 15. Create a function that joins two strings and returns the result.

// let joins = (str1,str2)=> str1+" "+str2
// console.log(joins('Swarup','Shivani'));

// 16. Write a function that takes two parameters and returns which one is bigger.

// let bigger = (num1, num2) => {
//   if (num1 > num2) return num1;
//   else return num2;
// };
// console.log('the bigger number is ->',bigger(60,40));

// 17. Write a function that takes three parameters and returns the
//     smallest number.

// let smallest = (num1, num2, num3) => {
//   if (num1 < num2 && num1 < num3) return num1;
//   else if (num2 < num1 && num2 < num3) return num2;
//   else return num3;
// };
// console.log("the smallest number is ->", smallest(500, 400, 100));

// 18. Write a function that prints any message five times (using a parameter).

// let message = (str) => {
//   for (let i = 1; i <=5; i++) {
//     console.log(str);
//   }
// };
// message(prompt('enter something'));

// 19. Write a function that takes an array and returns only even numbers.

// let even = (arr) => {
//   let element=[]
//   for (let i = 0; i <arr.length; i++) {
//     // console.log(arr[i]);
//     if (arr[i] % 2 == 0) {
//         element.push(arr[i])
//     }
//   }
//   return element
// };

// console.log(even([12, 20, 10,18,66,55,77,99,33]));

// 20. Write a function that takes an array and returns only odd numbers.

// let even = (arr) => {
//   let element = [];
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
//     if (arr[i] % 2 == 0) {
//       continue;
//     }
//     element.push(arr[i]);
//   }
//   return element;
// };

// console.log(even([12, 20, 10, 18, 66, 55, 77, 99, 33]));

// 21. Write a function that removes the first element of an array (using shift).

// let removes = (num) => {
//   num.shift();
//   return num;
// };
// console.log(removes([20, 30, 45, 15]));

// 22. Write a function that adds a value to the start of an array (using unshift).

//   let adds = (num) => {
//   num.unshift(12);
//   return num;
// };
// console.log(adds([20, 30, 45, 15]));

// 23. Write a function that removes the last element of an array (using pop).

//   let last_element = (num) => {
//   num.pop();
//   return num;
// };
// console.log(last_element([20, 30, 45, 15]));

// 24. Write a function that adds a value to the end of an array (using push).

//   let last_element = (num) => {
//   num.push(2046);
//   return num;
// };
// console.log(last_element([20, 30, 45, 15]));

// 25. Write a function that uses splice to remove 2 items from index 1.

// let items = (num) => {
//   num.splice(0,2,);
//   return num;
// };
// console.log(items([20, 30, 45, 15]));

// 26. Write a function that checks if a string contains the letter "a".

// let checks = (props) => {
//   console.log(props.toUpperCase());

//   console.log(props.includes("a"));
// };
// checks("Swarup was a king");

// 27. Write a function that counts vowels in a string.

// function vowels(params) {
//  let newParams =  params.toLowerCase()
//   let count = 0;

//   for (let i = 0; i < newParams.length; i++) {
//     if (
//       newParams[i] == "a" ||
//       newParams[i] == "e" ||
//       newParams[i] == "i" ||
//       newParams[i] == "o" ||
//       newParams[i] == "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// vowels("i love Javascript");

// 28. Write a function that reverses a string.

// function reverses(params) {
//   let New = "";
//   for (let i = params.length - 1; i >= 0; i--) {
//     New += params[i];
//     // console.log(params[i]);
//   }
//   console.log(New);
// }
// reverses("Javascript");

// 30. Write a function that returns how many spaces are in a string.

// function spaces(params) {
// //  let newParams =  params.toLowerCase()
//   let count = 0;

//   for (let i = 0; i < params.length; i++) {
//       if (params[i]==" ") {
//           count++
//       }
//   }
//   console.log(count);
// }
// spaces("i love Java script");

// 31. Write a function that returns the sum of all numbers in an array.

// let sum = (pathak) => {
//   let allSum = 0;
//   for (let i = 0; i < pathak.length; i++) {
//     allSum += pathak[i];
//   }
//   return allSum;
// };
// console.log(sum([1, 2, 4, 6, 7, 8, 2]));

// 32. Write a function that returns the biggest number from an array.

// let sum = (pathak) => {
//   let biggest = 0;
//   for (let i = 0; i < pathak.length; i++) {
//     if (biggest < pathak[i]) {
//       biggest = pathak[i];
//     }
//   }
//   return biggest;
// };
// console.log(sum([51, 2, 4, 6, 7, 8, 12]));

// 33. Write a function that returns the smallest number from an array.

// let sum = (pathak) => {
//   let biggest = pathak[1];
//   for (let i = 0; i < pathak.length; i++) {
//     if (biggest > pathak[i]) {
//       biggest = pathak[i];
//     }
//   }
//   return biggest;
// };
// console.log(sum([51, 200, 4, 6, 7, 8, 12]));

// 34. Write a function that doubles each number in an array.
// let sum = (pathak) => {
//   let doubles
//   let biggest = [];
//   for (let i = 0; i < pathak.length; i++) {
//     doubles =  pathak[i]+pathak[i]
//     biggest.push(doubles)
//   }
//   return biggest;
// };
// console.log(sum([51, 200, 4, 6, 7, 8, 12]));

// 35. Write a function that removes duplicate items from an array.

// let arr = (value) => {
//   let original = [];
//   for (let i = 0; i < value.length; i++) {
//     if (!original.includes(value[i])) {
//       original.push(value[i]);
//     }
//   }
//   console.log(original);
// };
// arr([1, 21, 1, 54, 65, 21, 54, 45, 67]);

// 36. Write a function that takes an array and returns only positive numbers.

// let arr = (value) => {
//   let positive = [];
//   for (let i = 0; i < value.length; i++) {
//     if (value[i] > 0) {
//       positive.push(value[i]);
//     }
//   }
//   return positive;
// };

// console.log(arr([1, 2, -1, -4, -8, -9, 10, 20, 30, 40]));

// 37. Write a function that checks if a number is divisible by 10.

// let Number = (value) => {
//   if (value % 10 == 0) {
//     console.log(value, "is divisible by 10");
//   } else {
//     console.log(value, "is not divisible by 10");
//   }
// };
// Number(50);
// 38. Write a function that prints the index of each item in an array.

// let arr = (value) => {
//   for (let i = 0; i < value.length; i++) {
//     console.log(value[i]);
//   }
// };
// arr([1, 25, 10, 55, 65, 21, 54, 45, 67]);

// 39. Write a function that returns the middle element of an array.

// let arr = (value) => {

//       let brr = Math.floor(value.length/2)
//       console.log(value[brr]);

// };
// arr([1, 25, 10, 55, 65, 21, 54, 45, 67]);

// 40. Write a function that removes 1 element from the middle of an array using splice.

// let arr = (value) => {
//   let brr = Math.floor(value.length / 2);
//   value.splice(brr, 1);
//   console.log(value);
// };
// arr([1, 25, 10, 55, 21, 54, 45, 67]);
