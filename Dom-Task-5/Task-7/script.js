let h2 = document.querySelector("h2");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let num = Math.floor(Math.random() * 10) + 1;
  if (num > 7) {
    h2.innerHTML = `Horray you win - winnig number -${num} `;
  } else {
    h2.innerHTML = `Try Again! your number - ${num}`;
  }
});
