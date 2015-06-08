
$(document).ready(function() { 

$(function() {
	/* 
	 * set original values - 
	 * the span is set to 0 opacity in anticipation of the hover event
	 * the text is set to be empty that it doesn't show 
	 */
	$("#spriteNav span").css("opacity", "0");
	$("#spriteNav span").text('');
	
	/* how do we hover? let me count the ways... */
	$("#spriteNav span").hover(function() {
		$(this).stop().animate({
			opacity: 1
	    }, 100); // end mousein
	}, function(){
		$(this).stop().animate({
			opacity: 0
		}, 500); // end mouseout
	}); // end hover function 
}); // end function

}); // end document ready function
	
