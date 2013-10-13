'use strict';

proji.factory('User', function() {
	return {
		username: '',
		secret: '',
		name: '',
		email: ''
	}
});

proji.factory('Regex', function() {
	return {
		username: /^[a-z0-9_-]{3,16}$/,
		secret: /.{6,}$/,
		email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
		phone: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
	}
});