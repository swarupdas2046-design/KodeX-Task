let box = document.querySelector(".box");
let type = document.querySelector("input");

type.addEventListener("input", function () {
  box.innerHTML = type.value;
});
