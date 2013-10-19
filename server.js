var express = require('express'),
	app = express();

app.configure(function() {
	app.set('port', 3000);
	app.PORT = app.get('port');
	app.use(express.static(__dirname + '/app'));
});

app.get('/', function(req, res) {
	res.send('hello');
});

app.listen(app.PORT, function() {
	console.log('Server listening on port ' + app.PORT);
});