const height = document.getElementById("height")
const weight = document.getElementById("weight")
const nameInput = document.getElementById("name")
const unit = document.getElementById("unit")

const bmiValue = document.getElementById("bmiValue")
const category = document.getElementById("category")
const suggestion = document.getElementById("suggestion")

const calculate = document.getElementById("calculate")
const reset = document.getElementById("reset")

const resultCard = document.querySelector(".result-card")
const historyList = document.getElementById("historyList")


calculate.addEventListener("click",function(){

let h = height.value
let w = weight.value
let name = nameInput.value || "User"

if(h=="" || w=="" || h<=0 || w<=0){

alert("Please enter valid values")
return

}

let bmi

if(unit.value==="metric"){

h = h/100
bmi = w/(h*h)

}

else{

bmi = (w/(h*h))*703

}

bmi = bmi.toFixed(2)

bmiValue.innerText=`BMI: ${bmi}`

let message=""
let advice=""

resultCard.className="card result-card"

if(bmi<18.5){

message="Underweight"
advice="Follow protein rich diet like eggs, milk and nuts."

resultCard.classList.add("underweight")

}

else if(bmi<25){

message="Normal"
advice="Maintain balanced diet and exercise regularly."

resultCard.classList.add("normal")

}

else if(bmi<30){

message="Overweight"
advice="Reduce junk food and start cardio exercise."

resultCard.classList.add("overweight")

}

else{

message="Obese"
advice="Focus on weight loss with healthy diet."

resultCard.classList.add("obese")

}

category.innerText=`Category: ${message}`
suggestion.innerText=advice

saveHistory(name,bmi)

})


reset.addEventListener("click",function(){

height.value=""
weight.value=""
nameInput.value=""

bmiValue.innerText="BMI: --"
category.innerText="Category: --"
suggestion.innerText="Suggestion will appear here"

resultCard.className="card result-card"

})


function saveHistory(name,bmi){

let data = JSON.parse(localStorage.getItem("bmiHistory")) || []

data.push({
name:name,
bmi:bmi
})

localStorage.setItem("bmiHistory",JSON.stringify(data))

loadHistory()

}



function loadHistory(){

historyList.innerHTML=""

let data = JSON.parse(localStorage.getItem("bmiHistory")) || []

data.forEach((item,index)=>{

let li = document.createElement("li")

li.innerHTML = `
${item.name} - BMI: ${item.bmi}
<button class="deleteBtn" data-id="${index}">Delete</button>
`

historyList.appendChild(li)

})

}



historyList.addEventListener("click",function(e){

if(e.target.classList.contains("deleteBtn")){

let index = e.target.dataset.id

let data = JSON.parse(localStorage.getItem("bmiHistory")) || []

data.splice(index,1)

localStorage.setItem("bmiHistory",JSON.stringify(data))

loadHistory()

}

})


loadHistory()