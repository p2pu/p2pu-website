(function() {
  const teamName = new URL(window.location.href).searchParams.get('team');
  if (teamName) {
    var subtitle = document.getElementById('search-subtitle')
    subtitle.innerHTML = '<p class="centered large">Sign up below for a learning circle organized by <span class="team-name">' + teamName + '</span></p><p class="centered small"><a href="/en/search/">Go to the global learning circles search page</a></p>'
  }
})();