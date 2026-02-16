let box = document.querySelector(".box");
let btn = document.querySelector("button");
let counter = 0;
btn.addEventListener("click", function () {
  if (counter == 0) {
    box.style.backgroundColor = "red";
    counter++;
  } else if (counter == 1) {
    box.style.backgroundColor = "green";
    counter++;
  } else if (counter == 2) {
    box.style.backgroundColor = "blue";
    counter = 0;
  }
});
