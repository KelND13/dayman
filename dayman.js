$( document ).ready( function() {
    $( '#orb' ).click( function() {
    	if($(this).hasClass('moon')) {
    		$(this).removeClass('moon').addClass('sun');
    	} else {
    		$(this).removeClass('sun').addClass('moon');
    	}

    	if ($('body').hasClass('night')) {
    		$('body').removeClass('night').addClass('day');
		} else {
    		$('body').removeClass('day').addClass('night');
		}

		if ($('#song').text("Dayman")) {
			$('#song').text("Fighter of the Nightman");
		} else {
			$('song').text("Dayman");
		}

    });

    $('#orb').hover(function() {
    	$('#lyric').text("Ah-ah-ahhhh!");
    }, function() {
    	$('#lyric').text(" ");
    });


});