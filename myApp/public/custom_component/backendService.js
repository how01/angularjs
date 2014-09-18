angular.module('myApp')
.factory('UserService', ['$http',function ($http) {
	
	return {
		getListData: function() {

			var promise = $http({
				url: 'data/list.json'
			});/*.success(function(data, status){
			 	console.log(data)
			}).error(function(data, status){
			 	console.log(data)
			 });*/

			 return promise;
		},
		getUserList:function(){
			return $http({url:'data/user.json'})
		}
	};
}])