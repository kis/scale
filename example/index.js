angular.module('myApp', ['scale']).controller('main', ['$scope', function($scope) {
	$scope.data = [];

	var SCALE_WIDTH = 50,
	    SCALE_HEIGHT = 10;

	for (var i=0; i < SCALE_WIDTH; i++) {
		var value = Math.floor(Math.random() * (SCALE_HEIGHT - 1) + 1);

		$scope.data.push({
			value: value 
		});
	}
}]);