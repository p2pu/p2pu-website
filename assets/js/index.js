
(function($) {

  // Initialize slick on testimonial slides

  $('.slick-init').each(function() {

    var slider = $(this);

    slider.slick({
      autoplay: false,
      dots: false,
      pauseOnHover: true,
      swipe: true,
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: 
        '<span class="material-icons next-arrow material-icons-outlined text-gray display-5"><span>arrow_forward_ios</span></span>',
      prevArrow: 
        '<span class="material-icons prev-arrow material-icons-outlined text-gray display-5"><span>arrow_back_ios</span></span>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    })
  })


})(jQuery)
