'use strict';

var proji = angular.module('proji', []);

// routers
proji.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/login.html',
			controller: 'LoginCtrl'
		})
		.when('/retrieve', {
			templateUrl: 'views/retrieve.html',
			controller: 'RetrieveCtrl'
		})
		.when('/sign-up', {
			templateUrl: 'views/signup.html',
			controller: 'SignUpCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});