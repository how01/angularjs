angular.module('SignIn')
.controller('SigninController', ['$scope','SignService', function ($scope,SignService) {
	SignService.getSignData().success(function(data){
		var user = data.sigin;
		var hobbyArr = user.hobby,hobby = {};
		for (var i =0;i<hobbyArr.length; i++) {
			hobby['val'+i] = hobbyArr[i];
		}
		user.hobby =hobby;
		console.log(user);
		$scope.user = user;
		
	});
}]);