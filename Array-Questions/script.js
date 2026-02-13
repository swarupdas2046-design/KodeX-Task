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

// 6. From an array of users, return only users who logged in within the last 7 days.

// let Users = [
//   {
//     Name: "Swarup Das",
//     date: "2025-05-15",
//   },
//   {
//     Name: "Shivani Pathak",
//     date: "2025-05-16",
//   },
//   {
//     Name: "Suresh Nag",
//     date: "2025-05-10",
//   },
//   {
//     Name: "Suman Karmakar",
//     date: "2025-05-11",
//   },
//   {
//     Name: "Mitali Deshpandey",
//     date: "2025-05-18",
//   },
// ];

// let current_Date = new Date("2025-05-20");
// let Last_Date = new Date("2025-05-13");

// let Log_User = Users.filter((elem) => {
//   let dates = new Date(elem.date);

//   if (dates >= Last_Date && dates <= current_Date) {
//     return elem;
//   }
// });

// console.log(Log_User);

// 7. Filter out duplicate values from an array **without using Set**.

// let array = [1, 2, 45, 77, 1, 2, 44, 77, 55];

// let duplicate = array.filter((val, idx, array) => {
//   return array.indexOf(val) === idx;
// });
// console.log(duplicate);

// 8. From an array of numbers, keep only those which are prime.

let array = [2,5,7,3,11,12,10,44,80]


let prime = array.filter((val)=>{
        if ( (val % 1 == 0) &&( val % val == 0) ) {
            
        }
})

