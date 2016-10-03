angular.module('myApp').factory('mainService', mainService);

mainService.$inject = ['$q', '$http'];

function mainService($q, $http) {
	return {
		getVotes: function() {
			return $http.get('./votes.json');
		}
	};
}