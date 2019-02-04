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

  var accessToken = 'pk.eyJ1Ijoic2hhcm9uLW5vbWFkaWMtbGFicyIsImEiOiJjanJtY2xuc2MwaG95NDNtbmUwa3o5bjRpIn0.fZpeaYNgU3Nh5NAcNLW5BQ';

  var mymap = L.map('global-map').setView([60, -0.09], 2);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + accessToken, {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: accessToken
  }).addTo(mymap);

  var markerClusters = L.markerClusterGroup();

  $.ajax({
    url,
    dataType: 'JSONP',
    type: 'GET',
    success: (res) => {
      $.each(res.items, function(index, item) {
        if (item.latitude && item.longitude) {
          var m = L.marker( [item.latitude, item.longitude] )
          markerClusters.addLayer( m );
        }
      })
      mymap.addLayer( markerClusters );
    }
  });

})(jQuery)