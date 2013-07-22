/*global angular, cmModule*/

var cmModule = angular.module("cmModule", []);


cmModule.config(function($routeProvider){
	$routeProvider.
		when('/',
			{
				controller : "WelcomeController",
				templateUrl : "js/Modules/cmModule/Partials/WelcomePartial.html"
			})
		.when('/test',
			{
				contoller : "TestController",
				templateUrl : "js/Modules/cmModule/Partials/TestPartial.html"
			})
		.otherwise({redirectTo: "/"});
});