'use strict';

proji.controller('SignUpCtrl', function($scope, $http, User, Regex) {
	$scope.user = User;
	$scope.regex = Regex;
	$scope.userCreate = function() {
		var errorMsg;

		$http({
			method: 'POST',
			url: '/sign-up/yay',
			data: $scope.user
		}).success(function(data, status, headers, config) {
			if( data.result === 'username exists') {
				console.log('result:', data.result);
			}
		}).error(function(data, status, headers, config) {
			console.log('Error:', status);
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