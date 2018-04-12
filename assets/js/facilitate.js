$(function() {
  var numberOfProfiles = 5;
  var selectedProfile = Math.floor(Math.random() * (numberOfProfiles)) + 1;
  var profileClass = 'profile_' + selectedProfile;

  $('.' + profileClass).addClass('selected-profile');
})
