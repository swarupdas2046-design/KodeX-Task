let main = document.querySelector("main");
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let flag = true;
btn.addEventListener("click", function () {
  if (flag == true) {
    main.style.backgroundColor = "white";
    h1.innerHTML = "light theme now";
    h1.style.color = "black";
    btn.style.color = "black";
    flag = false;
  } else {
    main.style.backgroundColor = "black";
    h1.innerHTML = "Dark theme now";
    h1.style.color = "white";
    btn.style.color = "white";

    flag = true;
  }
});
