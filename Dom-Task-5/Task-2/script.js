// 4. Create a function that mimics `Array.prototype.map()` **without using map**, and apply it to transform an array. ✅ 



let arr = [1, 2, 4, 5, 7, 8];
function maut(fun, arr) {
  console.log(arr);
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(fun(arr[i]));
  }
  return newarr;
}
let ans = maut(function (val) {
  return val + 2;
}, arr);

console.log(ans);