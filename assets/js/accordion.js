$(function() {
  $('.accordion-item .heading').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.accordion-item').toggleClass('open');
  })
})
