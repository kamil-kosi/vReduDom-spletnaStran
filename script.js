// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Form submission (optional basic JS)
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Hvala za vaše sporočilo! Odgovorili vam bomo v najkrajšem možnem času.");
    this.reset();
  });
  