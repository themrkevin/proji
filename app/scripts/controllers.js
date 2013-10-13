'use strict';

proji.controller('SignUpCtrl', function($scope, User, Regex) {
	$scope.user = User;
	$scope.regex = Regex;
	$scope.submit = function() {
		console.log('submitted',$scope.user);
	}
});

proji.controller('LoginCtrl', function($scope, User) {
	$scope.user = User;
	$scope.submit = function() {
		console.log('submitted',$scope.user);
	}
});

proji.controller('RetrieveCtrl', function($scope, User, Regex) {
	$scope.user = User;
	$scope.regex = Regex;
	$scope.submit = function() {
		console.log('submitted',$scope.user);
	}
});