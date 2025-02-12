// FAQ section
const faqItems = document.querySelectorAll('[data-key="faq-item"]');

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const answer = item.querySelector('[data-key="faq-body"]');
    const arrowIcon = item.querySelector("i");

    const isActive = item.classList.contains("active");

    // Remove ACTIVE class with all relevant elements
    faqItems.forEach((item) => {
      item.classList.remove("active");
      item.querySelector('[data-key="faq-body"]').classList.remove("active");
      item.querySelector("i").classList.remove("active");
    });

    if (!isActive) {
      item.classList.add("active");
      answer.classList.add("active");
      arrowIcon.classList.add("active");
    }
  });
});
