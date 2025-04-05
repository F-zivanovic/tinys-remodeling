// Open/close mobile menu
let hamburgerIcon = document.getElementById("hamburger");
let mobileMenu = document.getElementById("mobile-menu");
let closeMobileMenu = document.getElementById("close");

hamburgerIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

closeMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// Close mobile menu on screen > 1200px
window.addEventListener("resize", () => {
  if (window.innerWidth > 1200) {
    mobileMenu.classList.remove("active");
  }
});

// Change bg color of NAV section when it scroll
const nav = document.querySelector(".nav");

document.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Arrow up icon
const arrowUp = document.querySelector(".arrow__up");

document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    arrowUp.classList.add("active");
  } else {
    arrowUp.classList.remove("active");
  }
});

// Scroll to top arrow
const scrollBtn = document.querySelector(".arrow__up");

scrollBtn.addEventListener("click", () => {
  window.scroll({ top: 0, behavior: "smooth" });
});

// Dynamic date
getYear();

function getYear() {
  let copy = document.getElementById("year");
  let date = new Date();
  copy.innerHTML = date.getFullYear();
}
