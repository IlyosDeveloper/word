import { getData } from "./request";
import { updateUI } from "./updateUI";
import updateError from "./module";
const form = document.querySelector("form");
const input = document.querySelector(".input");
const border = document.querySelector('.searcher')
const error = document.querySelector('.error')
const loader = document.querySelector('.loader')


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = input.value;
  if(query==''.trim()){
  const time = setTimeout(()=>{
    border.style.border = '1px solid red'
    error.textContent = "Whoops, can't be empty..."
    updateError()
  })
  setInterval(()=>{
    clearTimeout(time)
      error.textContent = "";
      border.style.border = 'none'
    },3000)
  }
  const API = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
  getData(`${API}${query}`)
  .then((data) => {
    if(!data){
      loader.classList.add('hidden')
      const updateErr = document.querySelector('.text-error')
      updateErr.classList.remove('hidden')
    }else{
      updateUI(data);
    }
  }).catch(()=>{
    updateError()
  })
  form.reset();
});
