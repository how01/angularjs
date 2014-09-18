'use strict'

angular.module('myApp',['ngRoute','myList','HIT'])
.config(['$routeProvider',function ($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: 'login.html',
			controller: 'LoginCtrl'
		})
		.when('/form', {
			templateUrl: 'custom_modules/form/form.html',
			controller: 'FormCtrl'
		})
		.when('/', {
			templateUrl: 'custom_modules/list/formula.html',
			controller: 'myListController'
		})
		.when('/hit', {
			templateUrl: 'custom_modules/hit/hit.html',
			controller: 'HITController'
		})
		.when('/tab', {
			templateUrl: 'custom_modules/tab/tab.html',
			controller: 'TabController'
		})
		.when('/box', {
			templateUrl: 'custom_modules/box/boxmodel.html',
			controller: 'TabController'
		})
		.when('/tooltip', {
			templateUrl: 'custom_modules/tooltip/tooltip.html',
			controller: 'TabController'
		})
		.when('/carousel', {
			templateUrl: 'custom_modules/carousel/carousel.html',
			controller: 'TabController'
		})
		.when('/modal', {
			templateUrl: 'custom_modules/modal/modal_window.html',
			controller: 'TabController'
		})
		.otherwise({ redirectTo: '/' });
}])
.controller('ListController', ['$scope', function ($scope) {
	$scope.fields =[
		{name:'',placeholder:'username',isRequired:true},
		{name:'password',placeholder:'password',isRequired:true},
		{name:'email',placeholder:'email',isRequired:true},
		{name:'address',placeholder:'address',isRequired:true},
		{name:'phonenumber',placeholder:'phone number',isRequired:true}
	];
	
}])