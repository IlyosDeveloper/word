const fontSelect = document.querySelector('.font-select')
const fontsBtn = document.querySelectorAll('.fonts')

fontsBtn.forEach((font)=>{
    font.addEventListener('click',()=>{
        if(font.classList.contains('sans-serif')){
            document.body.style.fontFamily == 'sans-serif'
            fontSelect.textContent = 'Sans Serif'
        }else if(font.classList.contains('serif')){
            document.body.style.fontFamily = 'serif'
            fontSelect.textContent = 'Serif'
        }else if(font.classList.contains('mono')){
            document.body.style.fontFamily = 'monospace'
            fontSelect.textContent = 'Mono'
        }
    })
})
