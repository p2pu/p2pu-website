
// Initialize slick on testimonial slides

$('#testimonials .slide-container').slick({
  centerMode: true,
  variableWidth: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  swipe: true,
  focusOnSelect: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        pauseOnHover: false
      }
    },
  ]
})


// Initialize SmoothScroll

$(function() {
  new SmoothScroll('a[href*="#"]');
});


// Initialize ScrollReveal to animate entrance of elements

window.sr = ScrollReveal({ reset: false, distance: '20vh', viewFactor: 0.3, viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
 });
  sr.reveal('.card', 100);
  sr.reveal('.meeting-card', 100);
  sr.reveal('#about button', 100);
  sr.reveal('#call-to-action .circle', 100);


// Initialize additional scroll-based animations with ScrollMagic

function expandImageBgLines(event) {
  var delay = 150;
  var lines = event.currentTarget.triggerElement();
  $(lines).children('.bg-line').each(function(index) {
    var el = this;
    window.setTimeout(function() {
      $(el).addClass('expand');
    }, delay * (index + 1))
  });
}

$(function() {
  var controller = new ScrollMagic.Controller();
  var learningCirclesDefinition = document.getElementById('definition');
  var imageBgLines = document.querySelectorAll('.image-container .lines');

  imageBgLines.forEach(function(lineSection) {
    new ScrollMagic.Scene({
      triggerElement: lineSection
    })
    .on('enter', expandImageBgLines)
    .addTo(controller);
  })
})