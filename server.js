var express = require('express'),
	app = express();

app.configure(function() {
	app.set('port', 3000);
	app.PORT = app.get('port');
	app.use(express.bodyParser());
	app.use(express.static(__dirname + '/app'));
});

app.post('/sign-up/yay', function(req, res) {
	console.log('request: POST');
	console.log(req.body);
});

app.listen(app.PORT, function() {
	console.log('Server listening on port ' + app.PORT);
});