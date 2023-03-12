const checkbox = document.querySelector("#checkbox");
const dropdown = document.querySelector(".dropdown-content");
const searcher = document.querySelector(".searcher");
const button = document.querySelector(".button");
const input = document.querySelector(".input");
const toggleModeBtn = document.querySelector(".ball");

const modeLocal = localStorage.getItem("mode")
  ? localStorage.getItem("mode")
  : null;

if (modeLocal) {
  document.body.classList.add("dark-mode");
  dropdown.style.boxShadow = "0px 5px 30px #A445ED";
  searcher.style.boxShadow = "0px 5px 30px #A445ED";
  input.style.color = "#ffffff";
  toggleModeBtn.classList.add('toggle-mode')
  toggleModeBtn.classList.remove('toggle-light')
}

checkbox.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  
  modeLocal
    ? localStorage.setItem("mode", "")
    : localStorage.setItem("mode", "dark");
  if (document.body.classList.contains("dark-mode")) {
    toggleModeBtn.classList.add('toggle-mode')
    toggleModeBtn.classList.remove('toggle-light')
    dropdown.style.boxShadow = "0px 5px 30px #A445ED";
    searcher.style.boxShadow = "0px 5px 30px #A445ED";
    input.style.color = "#ffffff";
  } else {
    toggleModeBtn.classList.add('toggle-light')
    toggleModeBtn.classList.remove('toggle-mode')
    dropdown.style.boxShadow = "0px 5px 30px  rgba(0, 0, 0, 0.1)";
    searcher.style.boxShadow = "0px 5px 30px  rgba(0, 0, 0, 0.1)";
    input.style.color = "#000000";
  }
});
