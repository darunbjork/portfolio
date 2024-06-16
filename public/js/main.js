document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  // Smooth scrolling
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href');
      const section = document.querySelector(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // GSAP Animations
  gsap.from("header", { duration: 1, y: -100, opacity: 0, ease: "bounce" });
  gsap.from(".about-img", { duration: 1.5, x: -200, opacity: 0, delay: 0.5 });
  gsap.from(".project-grid", { duration: 1.5, y: 100, opacity: 0, delay: 1 });

  // Intersection Observer for fade-in animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
});
