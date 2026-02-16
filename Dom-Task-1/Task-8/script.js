let box = document.querySelector(".box");
let btn = document.querySelector("button");

box.addEventListener("mouseenter", function () {
  box.style.backgroundColor = "red";
});
box.addEventListener("mouseleave", function () {
  box.style.backgroundColor = "rgb(2, 63, 81)";
});
