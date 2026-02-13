// 1. Write a function that uses `forEach()` to calculate the total sum of an array.

// let Sum = (array)=>{
//     let total_Sum=0
//     array.forEach(element => {
//         total_Sum += element
//     });
//     console.log("the sum of an array",total_Sum);

// }
// Sum([1,2,3,4,5,6,7,8,9,10])

// 2. Write a function that uses `map()` to return a new array where each number is squared.
// let squared = (array) => {
//   let total = array.map((elem) => {
//     return elem * elem;
//   });
//   return total;
// };
// console.log(squared([2, 5, 7, 8, 9, 4]));

// 3. Write a function that uses `filter()` to return only numbers greater than 50.

// let Number = (value)=>{
//     let Result = value.filter((elem)=>{
//         return elem > 50
//     })
//     return Result
// }
// console.log(Number([100,500,45,78,12,23,45,65,98]))

// 4. Write a function that checks whether two values are strictly equal using `===`.

// let checks = (v1,v2)=>{
//    v1===v2?console.log('They are equal '): console.log('They are not equal ');
// }
// checks("500",500);

// 5. Write a function that demonstrates array mutability by modifying the original array using `push()`.
// let all = [10, 20, 40, 5, 62, 100];
// let array = (val) => {
//   val.push(200);
//   console.log(val);
// };
// array(all)
// console.log(all);

// 6. Write a function that removes the last element immutably (without modifying original array).

// let all = [10, 20, 40, 5, 62, 100];

// let array = (val) => {
//     let copy = [...val]
//     copy.pop()
//     console.log('copy',copy);

// };
// array(all);
// console.log('all',all);

// 7. Write a function that sorts numbers in ascending order using a proper compare function.
//     let number = [10,80,70,94,56,18,45,23,65]
// let ascending = (val)=>{
//     val.sort((a,b)=>{
//             return a-b
//     })
//     console.log(val);

// }
// ascending(number)

// 8. Write a function that sorts strings alphabetically.
// let strings = ["a", "z", "m", "n", "k", "b", "o", "l", "p"];
// let ascending = (val) => {

//   console.log(val.sort());
// };
// ascending(strings);

// 9. Write a function that reverses an array without using `reverse()`.

// let reverses = (value) => {
//   let newarr = [];
//   for (let i = value.length - 1; i >= 0; i--) {
//     newarr.push(value[i]);
//   }
//   console.log(newarr);
// };
// let arr = [5, 7, 8, 1, 2, 3];

// reverses(arr);

// 10. Write a function that merges two arrays using `concat()` and returns the result.

// let arr = [1,2,3]
// let arr2 = [4,5,6]

// let concats = (v1,v2)=>{
//     let v3 = v1.concat(v2)
//     return v3

// }
// console.log(concats(arr,arr2))

// 11. Write a function that merges two arrays and removes duplicate values.

// let arr = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];

// let concats = (v1, v2) => {
//   let v3 = v1.concat(v2);
//   let total = v3.filter((elem, index, v3) => {
//     return v3.indexOf(elem) == index;
//   });
//   return total;
// };
// console.log(concats(arr, arr2));

// 12. Write a function that manually checks whether a value exists in an array (without using `includes()`).

// let arr = [1, 4, 5, 7, 8, 9, 3];
// function checks(val, find) {
//   for (let i = 0; i < val.length; i++) {
//     if (val[i] == find) {
//         return true
//     }
//   }
//   return false
// }
// console.log(checks(arr, 7));

// 13. Write a function that uses `includes()` to check if an array contains a specific value.
// let arr = [1, 4, 5, 7, 8, 9, 3];
// function checks(val) {
//   return(val.includes(5));
// }
// console.log(checks(arr));

// 14. Write a function that filters strings starting with "A" using `startsWith()`.

// function strings(val) {
// let final = val.filter((elem)=>{
//       return  elem.startsWith('a')
//     })
//     return final
// }
// console.log(strings(['aman','vijay','laxman','anubhav','anisha','amit']))

// 15. Write a function that uses `find()` to return the first number greater than 100.

// function find_element(elem) {
//     let numbers = elem.find((value)=> value>100)
//     return numbers

// }
// console.log(find_element([12,45,7,200,400,55,4,78]))

// 16. Create an object and write a function that returns all its keys using a loop.

// let obj = {
//   name: "Swarup Das",
//   Collage: "Amity",
//   gender: "Male",
// };
// function loop(val) {
// let elem = []
//     for (const key in val) {
//     elem.push(key)
//   }
//   return elem
// }
// console.log(loop(obj)
// )

// 17. Write a function that adds a new property to an object immutably.

//  let obj = {
//   name: "Swarup Das",
//   Collage: "Amity",
//   gender: "Male",
// };
// console.log(obj);

// function loop(val) {
//     let newobj = {...val}

//     newobj.course = 'BCA'
//     console.log(newobj);

// }
// loop(obj)

// // 18. Write a function that updates a property in an object.

//  let obj = {
//   name: "Swarup Das",
//   Collage: "Amity",
//   gender: "Male",
// };
// console.log(obj);

// function loop(val) {
//    val.course = 'BCA'
//     console.log(val);

// }
// loop(obj)

// 19. Write a function that checks whether a specific key exists inside an object.

//  let obj = {
//   name: "Swarup Das",
//   Collage: "Amity",
//   gender: "Male",
// };
// console.log(obj);

// function loop(val) {
//     let elem
//   for (const key in val) {
//             if (key == "Collage") {
//                 elem = true
//             }
//   }

//   return elem

// }
// console.log(loop(obj))

// 20. Write a function that converts an object into an array of key-value pairs.

// let obj = {
//   name: "Swarup Das",
//   Collage: "Amity",
//   gender: "Male",
// };

// function convertToPairs(val) {
//   return Object.entries(val);
// }

// console.log(convertToPairs(obj));
