/*global jQuery, window, console, can, document */


var P2PU = window.P2PU || {};

(function ($, P2PU) {

	'use strict';


	var init = function () {
		$(function () {

			$.ajax({
				url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent("http://reports.p2pu.org/feed"),
				dataType: 'json',
				cache: true,
				success: function (data) {
					if (data.responseData.feed && data.responseData.feed.entries) {

						$.each(data.responseData.feed.entries, function (i, e) {
							if(i % 2){
								e.sideattr = 'left';
							}else{
								e.sideattr = 'right';
							}

						});
						$("#data").html(can.view("app-template", {reports: new can.List(data.responseData.feed.entries.reverse())}));
					}
				},
				error: function () {
					$("#data").html('<h1>Oh dear, something went wrong, could you try again please? Or tell us about this <a href="http://community.p2pu.org/category/tech/support">here</a></h1>');
				}
			});
		});
	};

	P2PU.Reports = {};
	P2PU.Reports.init = init;

}(jQuery, P2PU));
