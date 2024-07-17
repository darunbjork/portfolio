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

  const techItems = document.querySelectorAll('.slide-in');

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, {
      threshold: 0.1
  });

  techItems.forEach(item => {
      observer.observe(item);
  });
});
