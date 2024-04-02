
const darkBotton = document.getElementById("dark-mode-icon");
const lightBotton = document.getElementById("light-mode-icon");
const body = document.querySelector("body");

document.addEventListener('DOMContentLoaded', () => {    // event that will act just when the html loads without waiting the CSS
  const darkModeEnabled = localStorage.getItem('darkModeEnabled');   // localstorage saves things in "cache" 
  if (darkModeEnabled) {
    toggleDarkMode(); 
  }
});

function toggleDarkMode() {

  body.classList.toggle("dark-mode");
  toggleAction();
}

function toggleAction() {

  const isDarkMode = body.classList.contains("dark-mode")

  if (isDarkMode) {
    darkBotton.style.display = "none";
    lightBotton.style.display = "inline";
    localStorage.setItem('darkModeEnabled', true);
  } else {
    lightBotton.style.display = "none";
    darkBotton.style.display = "inline";
    localStorage.removeItem('darkModeEnabled');
  }
}