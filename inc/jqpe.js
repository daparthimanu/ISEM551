

$(document).ready(function() {
	/* Background Resizer */
	$("#bodyBackground").ezBgResize();
	
	/* modal windows */
	$('a.modal').click(function() {
        var modalID = $(this).attr('rel'); // get the name of the modal
        
        /* fade in the modal window and add a close button to it */
        $('#' + modalID).fadeIn().prepend('<a href="#" class="close"><img src="grfx/close_button.png" class="close_button" title="Close Window" alt="Close" /></a>');
        /* 
         * define the margins so that the modal is centered properly on the screen
         * we add 80px to the height/width to accomodate for the padding and border
         * width defined in the css
         */
        var modalMarginTop = ($('#' + modalID).height() + 80) / 2;
        var modalMarginLeft = ($('#' + modalID).width() + 80) / 2;
        /* apply the margins to the modal window */
        $('#' + modalID).css({
            'margin-top' : -modalMarginTop,
            'margin-left' : -modalMarginLeft
        });

        /* fade in the shade! (tired of the cheesy jokes yet?) */
        $('body').append('<div id="modalShade"></div>'); // add the shade layer to bottom of the body
        $('#modalShade').css('opacity', 0.7).fadeIn(); // set the opacity with jQuery to avoid all of the nasty CSS needed for IE
        return false; // keep the link from acting naturally
    });

    /*
     * close the modal and pull down the shade
     */
    $('a.close, #modalShade').live('click', function() { // clicking on the close or shade layer
    	var thisModalID = $('a.close').parent().attr('id');
        $('#modalShade, #'+thisModalID).fadeOut(function() {
            $('#modalShade, a.close').remove();  // remove the shade and the close button
        });
        return false;
    });
    
    /* new user name check */
    $('#penewuser').blur(function() {
    	var newName = $(this).val();
    	$.post('inc/peregister.php',
    		{formName: 'register', 
    		penewuser: newName}, 
    		function(data){
    			var usernameCount = data;
    			if(1 == usernameCount){
    				$('#usernameError').css('display', 'inline');
    			} else {
    				$('#usernameError').css('display', 'none');
    			}
    		}, 'html');
    });
});
