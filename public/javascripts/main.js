$(function() {
	var el = $('#quote-box');
	updateQuote(el);
	setInterval(function() {
		el.fadeOut(1200, function() {
			updateQuote('#quote-box');
			el.fadeIn(1200);
		});
	}, 20000);
});


function updateQuote(el) {
	if( $(el) ) {
		$.getJSON('/quote', function(quote) {
			if( quote && quote.author && quote.text ) {
				$(el).html("<div class='quote'>"+quote.text+"</div><small>-- "+quote.author+"</small>");
			}
		});
    }
}

