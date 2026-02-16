let Stop = document.querySelector(".stop");
let ready = document.querySelector(".ready");
let go = document.querySelector(".go");

let bc1 = document.querySelector(".bc1");
let bc2 = document.querySelector(".bc2");
let bc3 = document.querySelector(".bc3");
function resetColors() {
  bc1.style.backgroundColor = "transparent"; // Ya jo aapka default color ho
  bc2.style.backgroundColor = "transparent";
  bc3.style.backgroundColor = "transparent";
}
Stop.addEventListener("click", function () {
  resetColors();
  bc1.style.backgroundColor = "red";
});

ready.addEventListener("click", function () {
  resetColors();
  bc2.style.backgroundColor = "orange";
});
go.addEventListener("click", function () {
  resetColors();
  bc3.style.backgroundColor = "green";
});
