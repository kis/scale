angular.module('myApp', ['scale']).controller('main', ['$scope', function($scope) {

	$scope.data = [];

	var SCALE_WIDTH = 50,
	    SCALE_HEIGHT = 10;

	for (var i=0; i < SCALE_WIDTH; i++) {
	  $scope.data.push({type: Math.floor(Math.random() * (SCALE_HEIGHT - 1) + 1) });
	}

}]);