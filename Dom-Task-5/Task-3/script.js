let theme = document.querySelector('select')
let body = document.querySelector('body')

let savedTheme = localStorage.getItem('theme1')
if (savedTheme) {
    body.style.backgroundColor = `${savedTheme}`
    theme.value = `${savedTheme}`
}

theme.addEventListener('change',function(){
    localStorage.setItem('theme1',`${theme.value}`)
    body.style.backgroundColor = `${theme.value}`
})