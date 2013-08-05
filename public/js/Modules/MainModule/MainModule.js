/*global angular, mainModule, define, document*/

define(["angular",
	"js/Modules/Welcome/WelcomeModule",
	"js/Modules/Test/TestModule",
	"js/Modules/User/UserModule",
	"js/Modules/Dashboard/DashboardModule"
	], function(angular, welcomeModule, testModule, userModule, dashboardModule) {

		return (function() {

			var mainModule = angular.module("mainModule", ["welcomeModule", "testModule", "userModule", "dashboardModule"]);

			mainModule.config(["$routeProvider", function($routeProvider) {
				$routeProvider.otherwise({redirectTo: "/welcome"});
			}]);

			angular.bootstrap(document, ["mainModule"]);

		}());
});

