let products = [
  "Laptop",
  "Keyboard",
  "Mouse",
  "Monitor",
  "Printer",
  "Webcam",
  "Headphones",
  "Smartphone",
  "Tablet",
  "Smartwatch"
];

let input = document.querySelector("input");
let ol = document.querySelector("ol");


// 🔹 Function to render list
function renderList(arr) {
  ol.innerHTML = "";   // Step 1: clear old list

  arr.forEach(function (val) {
    let li = document.createElement("li");  // Step 2: create new li
    li.innerText = val;                     // Step 3: set text
    ol.appendChild(li);                     // Step 4: append to DOM
  });
}


// 🔹 Initially show all products
renderList(products);


// 🔹 When user types
input.addEventListener("input", function () {

  let userValue = input.value.toLowerCase();   // Step 5: get input value

  let filtered = products.filter(function (val) {
    return val.toLowerCase().startsWith(userValue);
  });
 
  renderList(filtered);   // Step 6: show filtered list

});