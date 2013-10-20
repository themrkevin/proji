var express = require('express'),
	https = require('https'),
	http = require('http'),
	app = express();

app.configure(function() {
	app.set('port', 3000);
	app.PORT = app.get('port');

	app.use(express.bodyParser());
	app.use(express.static(__dirname + '/app'));
});

app.post('/sign-up/yay', function(req, res) {
	console.log('======> request: POST <======');
	var b = req.body;

	User.find({ username: b.username }, function(err, docs) {
		req.user = docs[0];
		if(req.user) {
			console.log(b.username + ' exists. Please choose a new handle.');
			return false;
		} else {
			console.log(b.username + ' not found. Creating user.');
			new User({
				username: b.username,
				secret: b.secret,
				name: b.name,
				email: b.email
			}).save(function(err, user) {
				if(err) res.json(err);
				console.log(user);
			});
		}
	});
	// if() {
	// 	console.log(b.username + ' exists');
	// } else {
	// 	console.log(b.username + ' not found');
	// }
});

http.createServer(app).listen(app.PORT, function() {
	console.log('Server listening on port ' + app.PORT);
});

/**
 *	Database Stuff
 **/
var db = require('./lib/db');
db.listen(app);