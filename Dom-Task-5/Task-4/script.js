let box = document.querySelector(".box");
let btn = document.querySelector("button");

let rotation = 0;
let count = 0;


btn.addEventListener("click", () => {
  count++
  rotation += 360
  box.style.transform = `rotate(${rotation}deg)`
  box.innerHTML = count
  box.style.fontSize = '30px'
  box.style.fontWeight = '900'
})