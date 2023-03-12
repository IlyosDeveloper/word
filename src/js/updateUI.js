export function updateUI(data) {
    data.forEach((words) => {
        const update = document.querySelector(".update");
        const { phonetics, word, meanings, sourceUrls } = words;
        const div = document.createElement("div");
        update.innerHTML = "";
        div.innerHTML = `
                    <div class="keyboard">
                        <div class="keyboard-title">
                            <h1 class="title">${word}</h1>
                            <h5 class="transcription">
                            ${phonetics[1].text}
                            </h5>
                        </div>
                        <img class="play" src="./images/play.svg" alt="play">
                    </div>
                    <div class="hr">
                        <h4 class="noun">noun</h4>
                        <div class="line"><hr></div>
                    </div>
                    <h5 class="meaning">${meanings[0].definitions[0].definition}</h5>
                    <ul class="info">  
                        ${meanings[0].definitions.map((defin) => {
            return (`<li class="desc">${defin.definition}</li>`)
        })}
                    </ul>
                    <h4 class="Synonyms">Synonyms <span class="span"></span></h4>
                    <div class="hr">
                        <h4 class="verb">verb</h4>
                        <div class="line"><hr></div>
                    </div>
                    <h5 class="meaning">
                    ${meanings[1].definitions[0].definition}   
                    </h5>
                    <ul class="info-list">
                    ${meanings[0].definitions.map((defin) => {
                        return (`
                        <li class="info-desc">
                            ${defin.definition}
                        </li>`)        
                    })}
                    </ul>
                    <p class="verb-text">
                    ${meanings[1].definitions[0].definition}     
                    </p>
                    <hr class="footer-hr">
                    <div class="footer-link">
            <h6 class="footer-text">
                Source
            </h6>
            <a href="${sourceUrls[0]}" class="link">
            ${sourceUrls[0]}
            </a>
            <img src="./images/link.svg" alt="link">
        </div>
                  `;
        update.appendChild(div);

        const play = document.querySelector(".play");
        const span = document.querySelector(".span");

        let  source = ''
        play.addEventListener("click", () => {
            phonetics.map((aud)=>{
            if(aud.audio !== ''){
                source = aud.audio
            }
        });
        const audio = new Audio(source)
            audio.play();
        });

            const synonym = `${meanings[0].synonyms}`
            if(synonym == []){
                span.textContent = 'no synonyms';
            }else{
                span.textContent = `${synonym}`;
            }
    })
}
 