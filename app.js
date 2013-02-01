
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , fs = require('fs');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// get locals
require('./locals.js').init(app);

// Load all routes
fs.readdir('./routes/', function(err,files) {
	for(var index = 0; index < files.length; ++index ) {
		if( path.extname(files[index]) == '.js' ) {
			var obj = require('./routes/'+files[index]);
			if( obj.init ) {
				obj.init(app);
				console.log('Initialized: '+files[index]);
			}
		}
	}
});


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
