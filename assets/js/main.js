document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var navToggle = document.querySelector(".nav-toggle");
  var navList = document.querySelector(".nav-list");
  if (navToggle && navList) {
    navToggle.addEventListener("click", function () {
      var expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !expanded);
      navList.classList.toggle("open");
    });
  }

  // Theme toggle
  var themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      var next = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateLogos(next);
    });
  }

  // Set logos on load
  var current = document.documentElement.getAttribute("data-theme") || "dark";
  updateLogos(current);

  function updateLogos(theme) {
    var logos = document.querySelectorAll("img[data-dark][data-light]");
    logos.forEach(function (img) {
      img.src = theme === "light" ? img.dataset.light : img.dataset.dark;
    });
  }
});
