'use strict';

proji.directive('fieldBehavior', function() {
	return function(scope, element) {
		if(element.attr('tabindex') === "1") {
			element.select();
		}
		element
			.on('click', function() {
				element.select();
			});
	}
});

proji.directive('confirmIt', function() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, ctrl) {
			var pw = '#' + attrs.confirmIt;
			element.add(pw).on('keyup', function() {
				scope.$apply(function() {
					ctrl.$setValidity('pwyay', element.val() === $(pw).val());
				});
			});
		}
	}
});

proji.directive('responseRejected', function() {
});
