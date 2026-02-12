// 1. Given an array of prices, return a new array where each price includes 18% GST, rounded to 2 decimals.

// let prices = [299, 222, 455, 700, 900, 300, 500, 600, 400];

// let final_price = prices.map((elem) => {
//   let total = elem + (elem * 18) / 100;
//   return Number(total.toFixed(2))
// });
// console.log(final_price);

// 2. Convert an array of full names into an array of initials (e.g. "Virat Kohli" → "V.K").

// let UserName = ['Virat Kohli','Swarup Das','Shivani Pathak','Deep Saha','Abir Panda']

// let nickName = UserName.map((elem)=>{
//         let ok = elem.split(" ")
//          return ok[0][0] + '.' + ok[1][0]

//     })
// console.log(nickName);

// 3. From an array of numbers, return an array of objects `{value, isEven}`.

// let Numbers = [12, 20, 30, 40, 99, 33, 77, 55, 11];
// let ok = Numbers.map((elem) => {
//   let iseven;
//   if (elem % 2 == 0) iseven = true;
//   else iseven = false;
//   return {
//     value: elem,
//     isEven: iseven,
//   };
// });
// console.log(ok);

// 4. Convert an array of strings into their length **only if length > 3**, otherwise `null`.

// let array = ["swarup", "shivani", "das", "ram", "bunny", "lol"];

// let Length = array.map((str) => {
//   if (str.length > 3) {
//     return str.length;
//   } else {
//     return null;
//   }
// });
// console.log(Length);

// 5. Given an array of dates as strings, convert them into `Date` objects.

// let dates = ["2006-05-07","2005-01-24","2005-01-24","2010-05-14","2025-10-4"]

// let original = dates.map((elem)=>{
//         return    new Date(elem)

// })
// console.log(original);

