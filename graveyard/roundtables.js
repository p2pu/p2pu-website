/*global jQuery, window, console, can, document */


var P2PU = window.P2PU || {};

(function ($, P2PU) {

	'use strict';


	function list() {
		var request = gapi.client.youtube.playlistItems.list({
			part: 'snippet',
			playlistId: 'PLtywLmgP0F55FHsO3n93YLw_sGLzp9-5X'
		});

		request.execute(function (response) {

			var videos = new can.List(response.items);

			var frag = can.view("app-template", {videos: videos});

			$("#data").html(frag);
			/*
			response.items.forEach(function (item) {
				console.log(
					item.snippet.title,
					item.snippet.resourceId.videoId,
					item.snippet.thumbnails.default.url,
					item.snippet.publishedAt,
					item.snippet
				);
			});*/
		});
	}


	var init = function () {
		$(function () {
			gapi.client.setApiKey('AIzaSyCZ7J2JSVFVSY2rpp6cKhJkgxehP1nudHo');
			gapi.client.load('youtube', 'v3', list);
		});
	};

	P2PU.Roundtables = {};
	P2PU.Roundtables.init = init;

}(jQuery, P2PU));