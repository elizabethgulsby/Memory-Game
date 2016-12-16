var cards = [
	'<img src="animal-kingdom-01.jpg">',
	'<img src="animal-kingdom-04.jpg">',
	'<img src="animal-kingdom-07.jpg">',
	'<img src="animal-kingdom-night-06.jpg">',
	'<img src="animal-kingdom-night-14.jpg">',
	'<img src="image2.png">',
	'<img src="animal-kingdom.jpg">'
];



// All code will wait until the DOM is ready!
$(document).ready(function(){
	var gridSize = 8;

	var mgHTML = '';
	for(var i = 0; i < gridSize; i++){
		
		if(i < 2){
			card = cards[0];
		}
	    else if(i<4) {
	    	card = cards[1];
	    }
	    else if(i<6) {
	    	card = cards[2];
	    }
	    else {
	    	card = cards[3];
	    }
		mgHTML += '<div class="mg-tile col-sm-3">';
			mgHTML += '<div class="mg-tile-inner">';
				mgHTML += '<div class="mg-front">'+card+'</div>';
				mgHTML += '<div class="mg-back"></div>';
			mgHTML += '</div>';
		mgHTML += '</div>';
	}
	console.log(mgHTML);
    $('.mg-contents').html(mgHTML);
    $('.mg-tile-inner').click(function() {
    	$(this).toggleClass('flip');

    var cardsUp = $('.flip');  //sets everything in the DOM with a class of flip (it's an array) equal to a var
    if (cardsUp.length == 2) {
    	// CHECK TO SEE IF THEY ARE THE SAME (HAVE SAME IMAGE)
    	// console.log(cardsUp.find('.mg-front img'));  
    	var cardsUpImages = cardsUp.find('.mg-front img');  //getting the img from the .mg-front div
    	if (cardsUpImages[0].src == cardsUpImages[1].src) {
    		// THIS IS A MATCH!
    		cardsUp.addClass('matched');
    		cardsUp.removeClass('flip');
    	}
    	else {
    	//THE USER HAS FLIPPED 2 CARDS.  THEY DO NOT MATCH.  FLIP THEM BACK OVER.
    		setTimeout(function() {
    			cardsUp.removeClass('flip');
    			}, 2000);

    	}
	    // else {
	    // 	// DO NOTHING
	    // }

    }

});

});