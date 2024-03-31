
const darkBotton = document.getElementById("dark-mode-icon");
const lightBotton = document.getElementById("light-mode-icon");
const body = document.querySelector("body");

document.addEventListener('DOMContentLoaded', () => {
  const darkModeEnabled = localStorage.getItem('darkModeEnabled');
  if (darkModeEnabled) {
      enableDarkMode(); 
  }
});

function enableDarkMode() {

  body.classList.add("dark-mode");
  darkBotton.style.display = "none";
  lightBotton.style.display = "inline";
  localStorage.setItem('darkModeEnabled', true);

}

function enableLightMode() {

    body.classList.remove("dark-mode");
    lightBotton.style.display = "none";
    darkBotton.style.display = "inline";
    localStorage.removeItem('darkModeEnabled');

}
