let body = document.querySelector("main");

for (let i = 1; i <= 5; i++) {
  let box1 = document.createElement("div");
  box1.setAttribute("data-id", crypto.randomUUID());
  
  box1.style.height = "150px";
  box1.style.width = "230px";
  box1.innerHTML = `box numbber ${i}`;
  box1.style.fontSize = "25px";
  box1.style.cursor = "pointer";
  box1.style.textAlign = "center";
  box1.style.backgroundColor = "red";
  box1.style.border = "2px  solid  blue";
  body.appendChild(box1);
  box1.addEventListener("click", function (e) {
  console.log( '"Clicked Box ID:"',box1.getAttribute('data-id'));

    console.log(e);
    
    e.target.remove();
  });
}
