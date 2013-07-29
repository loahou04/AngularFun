/*global angular, mainModule, define, document*/

define(["angular",
	"js/Welcome/WelcomeController",
	"js/Test/TestController",
	"js/User/LoginController",
	"js/User/UserService"
	], function(angular, welcomeController, testController, loginController, UserService) {

		return {
			initialize : function() {

				var mainModule = angular.module("mainModule", []);

				mainModule.config(function($routeProvider) {
					$routeProvider.
						when("/",
						{
							controller : welcomeController,
							templateUrl : "client/js/Welcome/WelcomePartial.html"
						})
						.when("/test",
						{
							controller : testController,
							templateUrl : "client/js/Test/TestPartial.html"
						})
						.otherwise({redirectTo: "/"});
				});
				mainModule.factory("userService", ['$http', function($http) {
					return new UserService($http);
				}]);
				mainModule.controller("loginController", loginController);


				angular.bootstrap(document, ["mainModule"]);
			}
		};
});

