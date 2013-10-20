/**
 *	Mongoose JS
 *	Database functionality
 **/
var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/proji';

exports.listen = function(app) {
	//	Connection
	mongoose.connect(dbURI);

	//	Connection Events
	mongoose.connection.on('connected', function() {
		console.log('Connected to ' + dbURI);
	});
	mongoose.connection.on('error', function(err) {
		console.log('Oops! ' + err);
	});
	mongoose.connection.on('disconnect', function() {
		console.log('Disconnected from ' + dbURI);
	});

	//	Schemas
	var userSchema = mongoose.Schema({
		username: String,
		secret: String,
		name: String,
		email: String,
		created: {type: Date, default: Date.now}
	});

	User = mongoose.model('User', userSchema);
}