const darkBotton = document.getElementById("dark-mode-icon");
const lightBotton = document.getElementById("light-mode-icon");
const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => {
  // event that will act just when the html loads without waiting the CSS
  const darkModeEnabled = localStorage.getItem("darkModeEnabled"); // localstorage saves things in "cache"
  if (darkModeEnabled) {
    toggleDarkMode();
  }
});

function toggleDarkMode() {
  body.classList.toggle("dark-mode");
  toggleAction();
}

function toggleAction() {
  const isDarkMode = body.classList.contains("dark-mode");

  if (isDarkMode) {
    darkBotton.style.display = "none";
    lightBotton.style.display = "inline";
    localStorage.setItem("darkModeEnabled", true);
  } else {
    lightBotton.style.display = "none";
    darkBotton.style.display = "inline";
    localStorage.removeItem("darkModeEnabled");
  }
}

// Accordeon Interactivity

// NOTE: this code is made from a CSS library!

!(function () {
  for (
    var l = document.querySelectorAll(".my-accordion .menu"), e = 0;
    e < l.length;
    e++
  )

    l[e].addEventListener("click", n);
  function n() {
    for (
      var e = document.querySelectorAll(".my-accordion .panel"), n = 0;
      n < e.length;
      n++
    )
      e[n].className = "panel close";
    if (-1 == this.className.indexOf("active")) {
      for (n = 0; n < l.length; n++) l[n].className = "menu";
      (this.className = "menu active"),
        (this.nextElementSibling.className = "panel open");
    } else for (n = 0; n < l.length; n++) l[n].className = "menu";
  }
})();
