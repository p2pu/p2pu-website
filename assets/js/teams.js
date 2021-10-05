(function($) {

  // Initialize slick on testimonial slides

  $('.one-column.slick-init').each(function() {

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
  
  
  
  
  $('.three-column.slick-init').each(function() {

    var slider = $(this);
    
    slider.slick({
      autoplay: false,
      dots: true,
      pauseOnHover: true,
      swipe: true,
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      adaptiveHeight: false,
      nextArrow: 
          '<span class="material-icons next-arrow material-icons-outlined text-gray display-5"><span>arrow_forward_ios</span></span>',
      prevArrow: 
          '<span class="material-icons prev-arrow material-icons-outlined text-gray display-5"><span>arrow_back_ios</span></span>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
            arrows: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          }
        },
      ]
    })
  })



})(jQuery)