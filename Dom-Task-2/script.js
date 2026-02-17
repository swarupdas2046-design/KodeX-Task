let pictures = [
    'https://i.pinimg.com/736x/28/58/da/2858da5233ee05fe2cc6709f7c863418.jpg',
    'https://i.pinimg.com/1200x/fa/97/c1/fa97c1302fe061fd244f63f18c470251.jpg',
    'https://i.pinimg.com/1200x/1b/24/a8/1b24a8d9c4576ead83463f6f11effdff.jpg',
    'https://i.pinimg.com/1200x/a8/2a/6c/a82a6cb92f71ad96691631bdce73e106.jpg',
    'https://i.pinimg.com/736x/b8/b9/89/b8b9892536fcd2cb19ba3bf43f7017f3.jpg',
    'https://i.pinimg.com/736x/57/5e/fb/575efb1392c5dad3ddc928511326a004.jpg'
]
let main = document.querySelector('main')
let btn = document.querySelector('button')

btn.addEventListener('click',function(){
    let left_side = Math.floor(Math.random()*90)
    let right_side = Math.floor(Math.random()*90)

    let arr = Math.floor(Math.random()*pictures.length)
    let img = document.createElement('img')
        img.setAttribute('src',pictures[arr])
        img.style.position = 'absolute'
        img.style.left = left_side+'%',
        img.style.top = right_side+'%',
        
    
    main.appendChild(img)
    
})