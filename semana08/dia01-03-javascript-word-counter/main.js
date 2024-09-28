const elparrafo = document.querySelector('.text-3x3')
const elpalabras = document.querySelector('.text-3x2')
const elletras = document.querySelector('.text-3x0')
const eltext = document.querySelector('.w-full')
let i = 0
let j = 0
let k = 0
let keyCode = ''
document.addEventListener('keydown', function(event) {
    // console.log(event)
    console.log(event.key) // Letra
    console.log(event.keyCode) // Codigo ASCII
    keyCode = event.keyCode
    if (keyCode == 32 ) {
        elpalabras.textContent = ++j

    } else if(keyCode == 13) {
        
        elparrafo.textContent = ++k
        elpalabras.textContent = ++j
    } 
    else {
        elletras.textContent = ++i
    }
    
    
    //character.textContent = event.key
    console.log('cant '+ i)
  })



