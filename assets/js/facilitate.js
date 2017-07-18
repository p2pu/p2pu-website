$(function() {
  $('.question').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.faq-container').toggleClass('open');
  })

  var numberOfProfiles = 4;
  var selectedProfile = Math.floor(Math.random() * (numberOfProfiles)) + 1;
  var profileClass = 'profile_' + selectedProfile;

  $('.' + profileClass).addClass('selected-profile');
})
