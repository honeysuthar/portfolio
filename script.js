// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll-to-top button
const scrollButton = document.createElement("button");
scrollButton.innerText = "⬆️";
scrollButton.id = "scrollToTop";
scrollButton.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 0.5rem;
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  background: #c77dff;
  color: white;
  cursor: pointer;
  display: none;
  z-index: 999;
`;
document.body.appendChild(scrollButton);

window.addEventListener("scroll", () => {
  scrollButton.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
