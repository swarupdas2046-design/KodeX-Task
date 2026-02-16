let h1 = document.querySelector("h1")
let button = document.querySelector('button')
let count = 0
button.addEventListener('click',function() {
        if (count == 0) {
            h1.innerHTML = 'Welcome'
            count++
        }else{
            h1.innerHTML = 'Hello'
            count = 0
        }
        
})