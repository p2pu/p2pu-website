(function($) {
	var toggle = true;
	$('.navbar-toggler').on('click',function() {
		if(toggle)
		{
			$( 'main' ).prepend( '<div class="modal-backdrop fade show" style="z-index: 1;"></div>' );
			$('body').css({'padding-right':'10px','overflow':'hidden'});
			toggle = false;
		}
		else
		{
			$( 'main' ).remove( '<div class="modal-backdrop fade show" style="z-index: 1;"></div>' );
			$('body').removeAttr('style');
			toggle = true;
		}
	});
})(jQuery)
