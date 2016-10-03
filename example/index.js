angular.module('myApp').controller('main', main);

main.$inject = ['$scope', 'mainService'];

function main($scope, mainService) {

	$scope.data = [];

	mainService.getVotes().then(function(res) {
		$scope.data = res.data.map(function(item) {
			return {
				value: item["моя оценка"],
				title: item["русскоязычное название"]
			}
		});
	});
	
	/*var SCALE_WIDTH = 50,
	    SCALE_HEIGHT = 10;

	for (var i=0; i < SCALE_WIDTH; i++) {
		var value = Math.floor(Math.random() * SCALE_HEIGHT + 1);

		$scope.data.push({
			value: value,
			title: (i + 1) + " item"
		});
	}*/
}