/*global jQuery, window, console */


var P2PU = window.P2PU || {};

(function ($, P2PU) {

	'use strict';

	function fitRows($container, options) {

		var cols = options.numColumns,
			$els = $container.children(),
			maxH = 0, j,
			doSize;

		doSize = ( $container.width() !== $els.outerWidth(true) );

		$els.each(function (i, p) {

			var $p = $(p), h;

			$p.css('min-height', '');
			if (!doSize) {
				return;
			}

			maxH = Math.max($p.outerHeight(true), maxH);
			//if (i % cols === cols - 1 || i === cols - 1) {
			if (i % (cols)) {
				//for (j = cols; j; j--) {
				for (j = 0; j < cols - 1; j=j+1) {
					$p.css('min-height', maxH);
					$p = $p.prev();
				}
				maxH = 0;
			}

		});
	}

	var init = function () {
		$(function () {

			var opts = {
				numColumns: 3
			};

			fitRows($('.tiles'), opts);

			$(window).on('resize', function () {
				fitRows($('.tiles'), opts);
			});
		});
	};

	P2PU.Splash = {};
	P2PU.Splash.init = init;

}(jQuery, P2PU));