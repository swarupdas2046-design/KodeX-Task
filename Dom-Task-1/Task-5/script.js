let h1 = document.querySelector("h1");
let increase = document.querySelector(".plus");
let decrease = document.querySelector(".minus");
let counter = 0;
increase.addEventListener("click", function () {
  h1.innerHTML = counter++;
});

decrease.addEventListener("click", function () {
  h1.innerHTML = counter--;
});
