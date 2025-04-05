let loadMoreBtn = document.getElementById("projects-btn");

loadMoreBtn.addEventListener("click", () => {
  let projects = document.querySelectorAll('[data-item="projects-item"]');
  projects.forEach((project) => project.classList.remove("hidden"));

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      for (let i = 3; i < projects.length; i++) {
        projects[i].classList.add("hidden");
      }
    }
  });
});
