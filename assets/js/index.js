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

  // Initialize mapbox map

  var url = 'http://localhost:8000/api/learningcircles/'

  mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhcm9uLW5vbWFkaWMtbGFicyIsImEiOiJjanJtY2xuc2MwaG95NDNtbmUwa3o5bjRpIn0.fZpeaYNgU3Nh5NAcNLW5BQ';
  var map = new mapboxgl.Map({
    container: 'global-map',
    style: 'mapbox://styles/sharon-nomadic-labs/cjokl5im306372rnzp5rsykzw',
    zoom: 1.6,
    scrollZoom: false,
    center: [-31.949833, 27.947533],
  });

  var nav = new mapboxgl.NavigationControl();
  map.addControl(nav, 'bottom-right');

  $.ajax({
      url,
      dataType: 'JSONP',
      type: 'GET',
      success: (res) => {
        $.each(res.items, function(index, item) {
          if (item.latitude && item.longitude) {

            // create a HTML element for each feature
            var el = document.createElement('div');
            var active = Date.parse(item.end_date) > Date.now()
            console.log('active', active)
            var classes = active ? "marker active" : "marker";
            el.className = classes;
            el.setAttribute('title', item.course_title);

            // make a marker for each feature and add to the map
            new mapboxgl.Marker(el)
            .setLngLat([item.longitude, item.latitude])
            .addTo(map);
          }
        })
      }
    });

})(jQuery)