// start video when modal opens, pause video when modal closes

var ytPlayer;

function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player('player');
}

$('#video-modal').on('shown.bs.modal', function() {
  ytPlayer.playVideo();
})

$('#video-modal').on('hidden.bs.modal', function() {
  ytPlayer.pauseVideo();
})
