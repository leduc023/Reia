$(document).ready(function() {
  // Reveal sections on scroll with jQuery animation
  function revealSection(selector, delay) {
    $(selector).css({opacity: 0, position: 'relative', top: '30px'}).each(function(index) {
      $(this).delay(delay + index * 120).animate({opacity: 1, top: 0}, 800);
    });
  }

  revealSection('.feature-card', 100);
  revealSection('.pillar-box', 120);

  // Smooth scroll for anchor links
  $('a.nav-link').on('click', function(event) { 
    var target = $(this).attr('href');
    if (target.startsWith('#')) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: $(target).offset().top - 70 }, 700);
    }
  });

  // Animate hero buttons
  $('.btn-custom, .btn-outline-light').hover(
    function() {
      $(this).animate({ paddingLeft: '26px', paddingRight: '26px' }, 150);
    },
    function() {
      $(this).animate({ paddingLeft: '20px', paddingRight: '20px' }, 150);
    }
  );

  // Fade in hero text on load
  $('.hero-content').css({opacity: 0}).animate({opacity: 1}, 900);

  // IntersectionObserver: reveal sections on scroll (mirrors index.php behavior)
  (function() {
    const sectionIds = ['home', 'features', 'pillars', 'about', 'download'];

    // Ensure sections are marked hidden (force add)
    sectionIds.forEach(function(id) {
      const section = document.getElementById(id);
      if (section) {
        section.classList.add('hidden');
      }
    });

    // Slight delay to allow layout/images to stabilize
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

      const hiddenElements = document.querySelectorAll('.hidden');
      hiddenElements.forEach((el) => observer.observe(el));
    }, 80);
  })();

  // Close mobile menu after clicking a nav link (when toggler visible)
  $('.navbar-collapse .nav-link').on('click', function() {
    if ($('.navbar-toggler').is(':visible')) {
      $('.navbar-toggler').trigger('click');
    }
  });
});
