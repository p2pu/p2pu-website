$(document).ready(function() {
	if (window.outerWidth >= 768) {
		$('.mobile-tabs').removeClass('tab-pane fade');
		$('.nav-tabs').addClass('d-none');
		$('#topic-guides h2.sans-serif').removeClass('d-none');
	}
	if (window.outerWidth < 768) {
		$('.mobile-tabs').addClass('tab-pane fade');
		$('.nav-tabs').removeClass('d-none');
		$('#topic-guides h2.sans-serif').addClass('d-none');
	}
});
	
$(window).resize(function () {
  	if (window.outerWidth < 768) {
		$('.mobile-tabs').addClass('tab-pane fade');
		$('.nav-tabs').removeClass('d-none');
		$('#topic-guides h2.sans-serif').addClass('d-none');
	}
	if (window.outerWidth >= 768) {
		$('.mobile-tabs').removeClass('tab-pane fade');
		$('.nav-tabs').addClass('d-none');
		$('#topic-guides h2.sans-serif').removeClass('d-none');
	}
});
