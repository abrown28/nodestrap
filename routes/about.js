exports.init = function(app) {
    app.get('/about', function(req, res) {
			res.render('about', {});
		});
};

