

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

$(function() {
  var controller = new ScrollMagic.Controller();
  var learningCirclesDefinition = document.getElementById('definition');
  var imageBgLine = document.querySelectorAll('.image-container .bg-line');

  var startNumberAnimations = function() {
    document.querySelectorAll('.number').forEach(function(number) {
      var endVal = number.dataset.value;
      var countup = new CountUp(number, 0, endVal, 0, 2.5);
      countup.start();
    })
  }

  new ScrollMagic.Scene({
    triggerElement: imageBgLine,
    triggerHook: 'onEnter',
    offset: 100,
  })
  .setClassToggle(imageBgLine, 'expand')
  .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: learningCirclesDefinition,
      triggerHook: 'onEnter',
      offset: 200
    })
    .on('start', startNumberAnimations)
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: learningCirclesDefinition,
      triggerHook: 'onEnter',
      offset: 200
    })
    .setClassToggle(learningCirclesDefinition, "play-animation")
    .addTo(controller);
})