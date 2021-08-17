
(function($) {

  // Initialize slick on testimonial slides

  $('.slick-init').each(function() {

    var slider = $(this);

    slider.slick({
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      swipe: true,
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: '<span class="material-icons material-icons-outlined text-gray display-5">arrow_back_ios</span>',
      prevArrow: '<span class="material-icons material-icons-outlined text-gray display-5">arrow_forward_ios</span>',
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

  // ScrollMagic

  var controller = new ScrollMagic.Controller();
  var bgImageLines = document.querySelectorAll('main .lines');

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
