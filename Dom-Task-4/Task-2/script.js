let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let input = document.querySelector("input");

let userNum = Number(input.value);

btn.addEventListener("click", function () {
  let Num = Math.ceil(Math.random() * 50);

  if (input.value == "" || input.value == 0) {
    h1.innerHTML = "please enter number";
  } else if (input.value == Num) {
    h1.innerHTML = "you won congratulation";
  } else {
    h1.innerHTML = "Sorry Try Agin ";
  }
});
