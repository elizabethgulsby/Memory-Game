//remaking the memory game with Blackjack cards
// find a way to randomize the cards?

var cards = [
	'<img src="./Images-Cards/10c.png">',
	'<img src="./Images-Cards/11d.png">',
	'<img src="./Images-Cards/12h.png">',
	'<img src="./Images-Cards/13s.png">'
]

$(document).ready(function() {
	var gridsize = 8;
	var card;

	//populating HTML with JS
	var newHTML = '';
	// assigns an index (beginning with 0) of the cards array to 2-set-increments of card - up to cards[3]
	for (var i = 0; i < gridsize; i++) {
		if (i < 2) {
			card = cards[0];
		}
		else if (i < 4) {
			card = cards[1];
		}
		else if (i < 6) {
			card = cards[2];
		}
		else {
			card = cards[3];
		}
	newHTML += '<div class="card-tile col-sm-3">';
			newHTML += '<div class="card-tile-inner">';
				newHTML += '<div class="card-front">'+card+'</div>';
				newHTML += '<div class="card-back"><img src="Images-Cards/deck.png"></div>';  //inserted the string that card represents into 'card-back' - should be the one that shows on load
			newHTML += '</div>';
		newHTML += '</div>';

	}

	$('.deck-contents').html(newHTML);  //populates the HTML with newHTML contents
	$('.card-tile-inner').click(function() {
		$(this).toggleClass('flip');

		//check to see if the images you've clicked are the same
		var cardsUp = $('.flip');  //assigns everything in the DOM with a class of .flip to a variable (this is an array of elements)
		if (cardsUp.length == 2) {
		var cardsUpImages = cardsUp.find('.card-front img'); //gets the image from the div with class of 'card-front'
			if (cardsUpImages[0].src == cardsUpImages[1].src) {
				//checking to see if a match within the flipped up images has been found
				cardsUp.addClass('matched');
	    		cardsUp.removeClass('flip');
			}
			else {
				// the user has flipped two cards that don't match.  Flip them back over. Remove the flip class.
				setTimeout(function() {
					cardsUp.removeClass('flip');
				}, 1000);
			}
		}



	});





});