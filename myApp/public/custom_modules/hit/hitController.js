"use strict"

/**
*  Module
*
* Description
*/
angular.module('HIT')
.controller('HITController', ['$scope','HITService', function ($scope,HITService) {
	HITService.count()
	.then(function(data){
		$scope.hits =data;
	});

	$scope.registerHit = function(){
		HITService.registerHit()
			.then(function(data){
				$scope.hits =data;
			})
	}
}])