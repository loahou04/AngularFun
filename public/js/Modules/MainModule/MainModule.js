/*global angular, mainModule, userModule*/

var mainModule = angular.module("mainModule", ["userModule"]);


mainModule.config(function($routeProvider){
	$routeProvider.
		when("/",
		{
			controller : "WelcomeController",
			templateUrl : "client/js/Modules/MainModule/Partials/WelcomePartial.html"
		})
		.when("/test",
		{
			controller : "TestController",
			templateUrl : "client/js/Modules/MainModule/Partials/TestPartial.html"
		})
		.otherwise({redirectTo: "/"});
});