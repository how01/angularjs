'use strict'

/**
*  Module
*
* Description
*/
angular.module('myList')
.controller('myListController', ['$scope','UserService', function ($scope,UserService) {
	UserService.getListData().success(function(data){
			$scope.items =data;	
	});
	 
}]);