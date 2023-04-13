const faqToggles = document.querySelectorAll(".faq-toggle");
const faqs = document.querySelectorAll(".faq");

faqToggles.forEach((faqToggle, idx) => {
  faqToggle.addEventListener("click", () => {
    faqs[idx].classList.toggle("active");
  });
});
