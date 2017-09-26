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

		$('#song').text(function(i, text) {
			return text === "Dayman" ? "Fighter of the Nightman" : "Dayman";
		})

    });

    $('#orb').hover(function() {
    	$('#lyric').text("Ah-ah-ahhhh!");
    }, function() {
    	$('#lyric').text(" ");
    });


});