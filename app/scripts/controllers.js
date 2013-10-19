'use strict';

proji.controller('SignUpCtrl', function($scope, $http, User, Regex) {
	$scope.user = User;
	$scope.regex = Regex;
	$scope.userCreate = function() {
		console.log('submitted',$scope.user);
		$http({
			method: 'POST',
			url: 'http://localhost:3000/#/sign-up',
			data: $scope.user
		}).success(function(data, status, headers, config) {
			console.log('success');
		}).error(function(data, status, headers, config) {
			console.log('error:', status);
		});
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