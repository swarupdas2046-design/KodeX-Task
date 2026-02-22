let text = document.querySelector('textarea')
let box = document.querySelector('.box')
let h1 = document.querySelector('h1')
let p = document.querySelector('p')

let count = 0
text.addEventListener('input',function(){
    count = text.value.length
    console.log(count);
    p.innerHTML = count
    
   if (count>100) {
        text.style.color = 'red'
        console.warn('sorry limit extend');
    box.style.color = 'red'
    h1.innerHTML = 'sorry limit extend'
    h1.style.color = 'red'
   }
   else{
    h1.innerHTML = 'under limit'
        h1.style.color = 'white'
    box.style.color = 'white'
        text.style.color = 'black'

   }
    
})