
$(function() {
  var delay = 100;
  $('.nav-item .line').each(function(index) {
    var el = this;
    window.setTimeout(function() {
      $(el).addClass('expanded');
    }, delay * (index + 1))
  });
})

$('#testimonials .slide-container').slick({
  centerMode: true,
  variableWidth: true,
  dots: true,
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