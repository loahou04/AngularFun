/*global angular, mainModule, define, document*/

define(["angular",
	"js/Modules/Welcome/WelcomeModule",
	"js/Modules/Test/TestModule",
	"js/Modules/User/UserModule"
	], function(angular, welcomeModule, testModule, userModule) {

		return (function() {

			var mainModule = angular.module("mainModule", ["welcomeModule", "testModule", "userModule"]);

			mainModule.config(["$routeProvider", function($routeProvider) {
				$routeProvider.otherwise({redirectTo: "/welcome"});
			}]);
			// mainModule.factory("userService", ['$http', function($http) {
			// 	return new UserService($http);
			// }]);
			// mainModule.controller("loginController", loginController);

			angular.bootstrap(document, ["mainModule"]);

		}());
});

