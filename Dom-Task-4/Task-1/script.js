let btn = document.querySelector("button");
let main = document.querySelector("main");
btn.addEventListener("click", function () {
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);
  let high = Math.floor(Math.random() * 300) + 50;
  let widh = Math.floor(Math.random() * 300) + 50;
  let t = Math.floor(Math.random() * 80);
  let l = Math.floor(Math.random() * 80);
  let div = document.createElement("div");
  div.style.height = high + "px";
  div.style.width = widh + "px";
  div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
  div.style.position = "absolute";
  div.style.top = t + "%";
  div.style.left = l + "%";

  div.setAttribute("id", crypto.randomUUID());
  main.appendChild(div);
});
