var controller = new ScrollMagic.Controller();
var subtitles = document.querySelectorAll('.subtitle');

subtitles.forEach(function(subtitle) {
  new ScrollMagic.Scene({
        triggerElement: subtitle,
        triggerHook: 0.6
    })
    .setClassToggle(subtitle, "active")
    .addTo(controller);
});

$(function() {
  var delay = 100;
  $('.nav-item .line').each(function(index) {
    var el = this;
    window.setTimeout(function() {
      $(el).addClass('expanded');
    }, delay * (index + 1))
  });
})