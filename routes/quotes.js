var quote = {
	quotes: [
		{author: 'Julius Caeser', text: 'Cry Havoc and let slip the dogs of War!'}
		,{author: 'Ronald Reagan', text: 'Freedom is never more than one generation away from extinction. We didn\'t pass it to our children in the bloodstream. It must be fought for, protected, and handed on for them to do the same.'}
		,{author: 'Ronald Reagan', text: 'No government ever voluntarily reduces itself in size. Government programs, once launched, never disappear. Actually, a government bureau is the nearest thing to eternal life we\'ll ever see on this earth!'}
		,{author: 'Ronald Reagan', text: 'Concentrated power has always been the enemy of liberty.'}
		,{author: 'Ronald Reagan', text: 'We should measure welfare\'s success by how many people leave welfare, not by how many are added.'}
        ,{author: 'Ronald Reagan', text: 'Government\'s view of the economy could be summed up in a few short phrases: If it moves, tax it. If it keeps moving, regulate it. And if it stops moving, subsidize it.'}
        ,{author: 'Ronald Reagan', text: 'Man is not free unless government is limited.'}
        ,{author: 'Ronald Reagan', text: 'Government\'s first duty is to protect the people, not run their lives.'}
        ,{author: 'Ronald Reagan', text: 'We can\'t help everyone, but everyone can help someone'}
	],


	index: function(req, res) {
		var max = quote.quotes.length;

		var index = Math.floor(Math.random() * max);

		res.send(quote.quotes[index]);
	}
};

exports.init = function(app) {
	app.get('/quote', quote.index);
};
