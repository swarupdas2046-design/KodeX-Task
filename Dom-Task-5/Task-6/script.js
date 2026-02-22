let form = document.querySelector("form");
let Name = document.querySelector(".name");
let Image = document.querySelector(".Image");
let btn = document.querySelector("button");
let showcase = document.querySelector(".showcase");

function Card() {
  let div = document.createElement("div");
  div.classList.add("box");
  let p = document.createElement("p");
  p.innerHTML = `${Name.value}`;
  p.style.fontSize = '30px'
  p.style.color = 'white'

  let photo = document.createElement("img");
  photo.classList.add("photo");
  photo.src = `${Image.value}`;

  let button = document.createElement("button");
  button.classList.add("dltbtn");
  button.innerHTML = "Delete";
  button.addEventListener("click", function () {
    div.remove()
  });
  div.appendChild(photo);
  div.appendChild(p);
  div.appendChild(button);
  showcase.appendChild(div);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  Card();
    form.reset()
    btn.disabled = true
});
