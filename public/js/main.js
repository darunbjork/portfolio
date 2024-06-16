document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Dark mode toggle
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  console.log(darkModeToggle);
  darkModeToggle.addEventListener('click', () => {
      console.log("Dark mode toggle clicked");
      document.body.classList.toggle('dark-mode');
  });

  // Scroll-to-top button
  const scrollToTopButton = document.getElementById('scroll-to-top');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          scrollToTopButton.style.display = 'block';
      } else {
          scrollToTopButton.style.display = 'none';
      }
  });

  scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
