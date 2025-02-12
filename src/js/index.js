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
