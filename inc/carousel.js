
$(document).ready(function() {
	/* 
	 * this function will make the carousel scroll auto-matically.
	 * it is no different than the scrollRight click function
	 * aside from missing a binding to a click function. 
	 */
	function autoCarousel() {
    	var itemWidth = $('#carouselUL li').outerWidth() + 10;
        var moveFactor = parseInt($('#carouselUL').css('left')) - itemWidth;
        /* animate the carousel */
        $('#carouselUL').animate(
            {'left' : moveFactor}, 'slow', 'linear', function(){
                /* put the first item after the last item */
                $("#carouselUL li:last").after($("#carouselUL li:first"));
                /* reset left position */              
                $('#carouselUL').css({'left' : '-340px'});
        });
    };
    /* make the carousel scroll automatically when the page loads */
    var moveCarousel = setInterval(autoCarousel, 2000);
	/* set original thumbnail opacity */
    $('.carThumb, #scrollLeft, #scrollRight').css({opacity: 0.5});
    /* set up a hover function to animate the opacity and stop the auto-scroll*/
    $('.carThumb, #scrollLeft, #scrollRight').hover(function() {
        $(this).stop().animate({
            opacity: 1
        }, 75); // end mousein
        clearInterval(moveCarousel); //pause the auto-scroll on mouse over
    }, function() {
        $(this).stop().animate({
            opacity: 0.5
        }, 250); // end mouseout
        moveCarousel = setInterval(autoCarousel, 2000); // resume scroll on mouse out
    });
    
    /* click funtion for right scroll */
    $('#scrollRight').click(function(){
        /* calculate how far to move the carousel */
        var itemWidth = $('#carouselUL li').outerWidth() + 10;
        var moveFactor = parseInt($('#carouselUL').css('left')) - itemWidth;
        /* animate the carousel */
        $('#carouselUL').animate(
            {'left' : moveFactor}, 'slow', 'linear', function(){
                /* put the first item after the last item */
                $("#carouselUL li:last").after($("#carouselUL li:first"));
                /* reset left position */              
                $('#carouselUL').css({'left' : '-340px'});
        });
    });

    /* click for left scroll */
    $('#scrollLeft').click(function(){
        /* calculate movement to the left */
    	var itemWidth = $('#carouselUL li').outerWidth() + 10;
        var moveFactor = parseInt($('#carouselUL').css('left')) + itemWidth;
        /* animate the carousel */
        $('#carouselUL').animate(
            {'left' : moveFactor}, 'slow', 'linear', function(){
                /* put the last item before the first */
                $("#carouselUL li:first").before($("#carouselUL li:last"));
                /* reset the left position */
                $('#carouselUL').css({'left' : '-340px'});
            });
        });
    
    /* click function to load larger pictures */
    $('.carThumb').click( function() {
        /* get the source from our image tag */
        var photoInfo = $(this).attr("src");
        /* split the source by the '/' */
        var photoPathArr = photoInfo.split('/');
        /* the path is the first portion of the array plus a forward slash */
        var photoPath = photoPathArr[0]+'/';
        /* get an array with the photo name in it */
        var photoInfoArr = photoInfo.split('_');
        /* now put it back together for using in the photo container */
        var photoImgTag = '<img src="'+photoPath+photoInfoArr[1]+'" id="currentPhoto" />';
        /* get the name of the modal window */
        var modalID = $(this).attr('rel');
        /* add the tag to the modal window */       
        $('#' + modalID).html(photoImgTag);
        /* fade in the modal window and add a close button to it */
        $('#' + modalID).fadeIn().delay(1000).append('<div class="photoNote"><a href="#" class="closePhoto"><img src="grfx/photoClose.jpg" class="closeX" title="Close Photo" alt="Close" /></a></div>');
        /* set the height of the image to the height of the body -200 pixels to allow for margin */
        var bodyHeight = $('body').height();
        $('#currentPhoto').css('height', (bodyHeight - 200));
        /* 
         * define the margins so that the modal is centered properly on the screen
         * we add 40px to the height/width to accomodate for the padding and border
         * width defined by the image
         */
        var modalMarginTop = ($('#' + modalID).height() + 40) / 2;
        var modalMarginLeft = ($('#' + modalID).width() + 40) / 2;
        /* apply the margins to the modal window */
        $('#' + modalID).css({
            'margin-top' : -modalMarginTop,
            'margin-left' : -modalMarginLeft
        });
        /* fade in the shade */
        $('body').append('<div id="carouselShade"></div>'); // add the shade layer to bottom of the body
        $('#carouselShade').css('opacity', 0.7).fadeIn(); // set the opacity with jQuery to avoid all of the nasty CSS needed for IE
        return false; // keep the link from acting naturally
    });

    /*
     * close the modal and pull down the shade
     */
    $('a.closePhoto, #carouselShade').live('click', function() { // clicking on the close or shade layer
    	var thisModalID = $('a.closePhoto').parent().parent().attr('id');
        $('.photoNote, #carouselShade, #'+thisModalID).fadeOut(function() {
            $('.photoNote, a.closePhoto, #carouselShade, #currentPhoto').remove();  // remove the shade and the close button
        });
        return false;
    });
});
