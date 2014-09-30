angular.module('myApp')
.factory('SignService', ['$http',function ($http) {
	return {
		getSignData: function() {
			var promise = $http({
				url: 'data/signin.json'
			});

			return promise;
		}
	};
}]);