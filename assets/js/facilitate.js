$(function() {
  $('.faq-container a.show-answer').on('click', function(e) {
    e.preventDefault()
    $(this).closest('.faq-container').removeClass('closed').addClass('open');
  })

  $('.faq-container a.hide-answer').on('click', function(e) {
    e.preventDefault()
    $(this).closest('.faq-container').removeClass('open').addClass('closed');
  })

  var numberOfProfiles = 3;
  var selectedProfile = Math.floor(Math.random() * (numberOfProfiles)) + 1;
  var profileClass = 'profile_' + selectedProfile;

  $('.' + profileClass).addClass('selected-profile');
})
