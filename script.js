const cards = document.querySelectorAll(".features-grid article, .faq-box, .hero-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(56,189,248,.16), rgba(8,16,31,.72) 38%)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "";
  });
});
