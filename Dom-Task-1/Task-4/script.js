let box = document.querySelector('.box')
let rightbtn = document.querySelector('.right')
let leftbtn = document.querySelector('.left')
let round = 45
rightbtn.addEventListener('click',function(){
    box.style.rotate = `${round+1}`+'deg'
    console.log(`${round++}`);
    
    
})

leftbtn.addEventListener('click',function(){
  
    box.style.rotate = `${-round}`+'deg'
    console.log(`${round++}`);
})
