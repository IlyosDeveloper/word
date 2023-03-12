
const updateError = ()=>{
    const update = document.querySelector(".update");
    const div = document.createElement('div')
    div.classList.add('text-error')
    update.innerHTML = ''
    div.innerHTML = `
    <img class="icon" src="./images/icon.svg" alt="">
            <h3 class="title-error">No Definitions Found</h3>
            <p class="info-error">
                Sorry pal, we couldn't find definitions for the
                 word you were looking for. You can try the search
                  again at later time or head to the web instead.
            </p>
    `
    update.appendChild(div)
}

export default updateError