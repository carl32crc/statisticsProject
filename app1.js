var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var http = require('http');
var path = require('path');

var favicon = require('serve-favicon'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	errorHandler = require('errorhandler');

var routerOffers = require('./routes/offers');
var PORT = process.env.PORT || 8080;


var app = express();

app.locals.appname = 'Express.js Todo App'
app.locals.moment = require('moment');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));

app.use( require('less-middleware')(path.join(__dirname, 'public')) );
app.use( express.static(path.join(__dirname, 'public')) );
app.use( express.static(path.join(__dirname, 'views')) );

// development only
if ('development' == app.get('env')) {
	app.use(errorHandler());
}

var urlDb =  process.env.MONGODB_URI || 'mongodb://localhost:27017/offers';
console.log ("connect to " + urlDb)

MongoClient.connect( urlDb, function(err, db) {

	if (err) throw err;

	console.log ("connected!")
	app.use ('/', routerOffers(db) );

	app.get('*', function(req, res){
 	  res.sendfile('./public/index.html');
  	})

	app.listen( PORT, function(){
		console.log('Express server listening on port ' + PORT);
	});

} )
