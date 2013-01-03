var home = {
	index: function(req, res){
		res.render('index', { });
	}
};

exports.init = function(app) {
    app.get('/', home.index);
};
