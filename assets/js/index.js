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

// Initialize slick on upcoming meetings slides

$(function() {
  $('#preview .slide-container').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    swipe: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
      },
    ]
  })
})

// Initialize ScrollReveal to animate entrance of elements

window.sr = ScrollReveal({ reset: true, distance: '25vh', viewFactor: 0.3, viewOffset: { top: 64, right: 0, bottom: 0, left: 0 },
 });
  sr.reveal('.card', 100);
  sr.reveal('.meeting-card', 100);
  sr.reveal('#about button', 100);
  sr.reveal('#call-to-action .circle', 100);


// Initialize additional scroll-based animations with ScrollMagic

$(function() {
  var controller = new ScrollMagic.Controller();
  var learningCirclesDefinition = document.getElementById('definition');
  var imageBgLines = document.querySelectorAll('.image-container .bg-line');
  var countUpNumbers = document.querySelectorAll('.number');

  var startNumberAnimation = function(number) {
    return function() {
      var endVal = number.dataset.value;
      var countup = new CountUp(number, 0, endVal, 0, 2);
      countup.start();
    }
  }

  countUpNumbers.forEach(function(number) {
    new ScrollMagic.Scene({
      triggerElement: number,
      triggerHook: 'onEnter',
      offset: 200
    })
    .on('start', startNumberAnimation(number))
    .addTo(controller);
  })

  imageBgLines.forEach(function(line) {
    new ScrollMagic.Scene({
      triggerElement: line,
      triggerHook: 'onEnter',
      offset: 100,
    })
    .setClassToggle(line, 'expand')
    .addTo(controller);
  })
})