(function($) {

  // Initialize slick on testimonial slides

  $('.slick-init').each(function() {

    var slider = $(this);

    slider.slick({
      autoplay: false,
      dots: true,
      pauseOnHover: true,
      swipe: true,
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      adaptiveHeight: false,
    })
  })

})(jQuery)