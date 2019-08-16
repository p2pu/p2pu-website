
(function($) {

  // Initialize slick on testimonial slides

  $('.p2pu-slide-container').each(function() {

    var slider = $(this);

    slider.slick({
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
  })

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

  // SmoothMagic

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


// Initialize SmoothScroll
new SmoothScroll('a[href*="#"]');


// Initialize AOS
AOS.init();


// start video when modal opens, pause video when modal closes

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var ytPlayer;
function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player('youtube-player', {
    height: '100%',
    width: '100%',
    videoId: 'bQqmIS7WQa8',
    events: {}
  });
}

$('#video-modal').on('shown.bs.modal', function() {
  ytPlayer.playVideo();
})

$('#video-modal').on('hidden.bs.modal', function() {
  ytPlayer.pauseVideo();
})
