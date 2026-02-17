let box = document.querySelector(".inner");
let btn = document.querySelector("button");
let flag = true;
btn.addEventListener("click", function () {
  if (flag == true) {
    box.style.display = "none";
    btn.innerHTML = "Show";
    flag = false;
  } else {
    box.style.display = "block";
    flag = true;
    btn.innerHTML = "Hide";
  }
});
