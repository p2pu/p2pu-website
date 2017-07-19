
$(function() {
  var delay = 100;
  $('.nav-item .line').each(function(index) {
    var el = this;
    window.setTimeout(function() {
      $(el).addClass('expanded');
    }, delay * (index + 1))
  });
})