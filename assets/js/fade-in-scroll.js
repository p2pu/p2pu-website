/* js/fade-in-scroll.js */

//$(document).ready(function() {
$(window).on('load', function(){	

	$('main > section, header.page-header').each( function(i){
			
			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var top_of_object = $(this).position().top + 10;
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			
			/* If the object is completely visible in the window, fade it in */
			if( bottom_of_window > top_of_object ){
				
				$(this).animate({'opacity':'1'},250);
					
			}
			
		});
	
	/* Every time the window is scrolled ... */
	$(window).scroll( function(){
	
		/* Check the location of each desired element */
		$('main > section').each( function(i){
			
			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var top_of_object = $(this).position().top + 10;
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			
			/* If the object is completely visible in the window, fade it in */
			if( bottom_of_window > top_of_object ){
				
				$(this).delay(250).animate({'opacity':'1'},250);
					
			}
			
		}); 
	
	});
	
});