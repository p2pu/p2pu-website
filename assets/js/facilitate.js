// start video when modal opens, pause video when modal closes

var tag = document.createElement('script');
tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var ytPlayer;
function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player('youtube-player', {
    height: '100%',
    width: '100%',
    videoId: 's8w9IKiuyys',
    events: {}
  });
}

$('#video-modal').on('shown.bs.modal', function() {
  ytPlayer.playVideo();
})

$('#video-modal').on('hidden.bs.modal', function() {
  ytPlayer.pauseVideo();
})