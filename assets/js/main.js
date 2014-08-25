/*global jQuery, window, console */


var P2PU = window.P2PU || {};

(function ($, P2PU) {

	'use strict';


	var init = function () {
		$(function () {
			// p2pu tab
			$(".p2pu-tab").p2puSlider({
				navbarContainer: '.navbar',
				icon: '.p2pu-tab-icon',
				iconUp: 'fa fa-chevron-down',
				iconDown: 'fa fa-chevron-up'
			});
		});
	};

	P2PU.Splash = {};
	P2PU.Splash.init = init;

}(jQuery, P2PU));