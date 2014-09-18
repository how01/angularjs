angular.module('HIT')
.factory('HITService', ['$q','$http',function ($q,$http) {
	return {
			count:function(){
				var d = $q.defer();
				 $http({url:'/hits'})
				 .success(function(data,status){
				 	d.resolve(data.hits);
				 }).error(function(data,status){
				 	d.reject(data);
				 });
				return d.promise; 
			},
			registerHit:function(){
				var d = $q.defer();
				 $http.get('/hit')
				 .success(function(data,status){
				 	d.resolve(data.hits);
				 }).error(function(data,status){
				 	d.reject(data);
				 });
				return d.promise;
			}
	};
}])