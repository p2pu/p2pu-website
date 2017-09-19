(function() {
  var teamName = new URL(window.location.href).searchParams.get('team');
  if (teamName) {
    $('#search-subtitle').hide();
    $('#team-title').html('<p class="centered large">Sign up below for a learning circle organized by <span class="team-name">' + teamName + '</span></p><p class="centered small"><a href="/en/learning-circles/">Go to the global learning circles search page</a></p>')
  }
})();