/*global jQuery, window, console */


var P2PU = window.P2PU || {};

(function ($, P2PU) {

	'use strict';


	var init = function () {
		$(function () {
			//youtube channel URL (mandatory) -----------------------------
			youTubeChannelURL = "https://www.youtube.com/user/Peer2PeerUniversity";

			youmaxDefaultTab = "uploads";
			youmaxColumns = 3;
			//youmaxWidgetWidth = 800;
			//youmaxWidgetHeight = 1000;
			showFeaturedVideoOnLoad = true;
			showVideoInLightbox = false;
			prepareYoumax();
		});
	};

	P2PU.Splash = {};
	P2PU.Splash.init = init;

}(jQuery, P2PU));