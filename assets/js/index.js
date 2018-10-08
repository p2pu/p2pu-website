(function($) {

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

   new SmoothScroll('a[href*="#"]');


  // Initialize additional scroll-based animations with ScrollMagic

  function expandImageBgLines(event) {
    var delay = 100;
    var lines = event.currentTarget.triggerElement();
    $(lines).children('.bg-line').each(function(index) {
      var el = this;
      window.setTimeout(function() {
        $(el).addClass('expand');
      }, delay * (index + 1))
    });
  }

  // SmoothScroll

  var controller = new ScrollMagic.Controller();
  var learningCirclesDefinition = document.getElementById('definition');
  var bgImageLines = document.querySelectorAll('main > .image-container .lines');

  new ScrollMagic.Scene({
    triggerElement: bgImageLines
  })
  .on('enter', expandImageBgLines)
  .addTo(controller);

  // Start landing page line animation on page load

  $(window).on("load", function() {
    var delay = 100;
    var lines = $('#landing .lines')
    $(lines).children('.bg-line').each(function(index) {
      var el = this;
      window.setTimeout(function() {
        $(el).addClass('expand');
      }, delay * (index + 1))
    });
  })

})(jQuery)