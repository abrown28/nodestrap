var contact = {
    index: function(req, res) {
        res.render('contact', {});
    },

	save: function(req, res) {
		res.redirect('/');
	}
};

exports.init = function(app) {
    app.get( '/contact', contact.index);
	app.post('/contact', contact.save);
};

