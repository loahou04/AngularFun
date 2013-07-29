/*global angular, mainModule, define, document*/

define(["angular",
	"js/Welcome/WelcomeController",
	"js/Test/TestController",
	"js/User/UserModule"
	], function(angular, welcomeController, testController, userModule) {

		return (function() {

			var mainModule = angular.module("mainModule", ["userModule"]);

			mainModule.config(["$routeProvider", function($routeProvider) {
				$routeProvider.
					when("/",
					{
						controller : ["$scope", "$rootScope", "userFactory", welcomeController],
						templateUrl : "client/js/Welcome/WelcomePartial.html"
					})
					.when("/test",
					{
						controller : testController,
						templateUrl : "client/js/Test/TestPartial.html"
					})
					.otherwise({redirectTo: "/"});
			}]);
			// mainModule.factory("userService", ['$http', function($http) {
			// 	return new UserService($http);
			// }]);
			// mainModule.controller("loginController", loginController);

			angular.bootstrap(document.getElementById("mainModuleId"), ["mainModule"]);

		}());
});

