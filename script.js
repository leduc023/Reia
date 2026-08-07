$(document).ready(function() {
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

  // IntersectionObserver: reveal cards on scroll
  (function() {
    // Mark all cards as hidden initially
    const elementsToObserve = [
      '.feature-card',
      '.pillar-box',
      '.about-card',
      '.download-card'
    ];

    elementsToObserve.forEach(function(selector) {
      $(selector).addClass('hidden');
    });

    // Slight delay to allow layout/images to stabilize
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stop observing after revealing
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -15% 0px' });

      // Observe all card elements
      document.querySelectorAll('.feature-card, .pillar-box, .about-card, .download-card').forEach((el) => {
        observer.observe(el);
      });
    }, 100);
  })();

  // Close mobile menu after clicking a nav link (when toggler visible)
  $('.navbar-collapse .nav-link').on('click', function() {
    if ($('.navbar-toggler').is(':visible')) {
      $('.navbar-toggler').trigger('click');
    }
  });
});
