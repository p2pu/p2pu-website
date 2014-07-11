/*global jQuery, console */


var P2PU = window.P2PU || {};

(function ($, P2PU) {

	'use strict';

	var init = function () {
		$(function () {
			var header = $('.navbar-p2pu');

			$('.navbar-toggle').sidr({
				name: 'sidr-right',
				side: 'right',
				source: '.nav'
			});
			/*
			$(window).scroll(function () {
				var scroll = $(window).scrollTop();

				if (scroll >= 1) {
					//header.addClass('sticky-nav');
				} else {
					//header.removeClass('sticky-nav');
				}
			});*/


		});
	};

	P2PU.Splash = {};
	P2PU.Splash.init = init;

}(jQuery, P2PU));