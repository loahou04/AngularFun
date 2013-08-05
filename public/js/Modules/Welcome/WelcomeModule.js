/*global define, angular*/

define([
	"angular",
	"js/Modules/Welcome/WelcomeController",
	"js/Modules/User/UserModule"],
	function(angular, welcomeController, userModule) {

		return (function(){

			var welcomeModule = angular.module("welcomeModule", []);

			welcomeModule.config(["$routeProvider", function($routeProvider) {
				$routeProvider.when("/welcome",
					{
						controller : ["$scope", "$rootScope", "userFactory", welcomeController],
						templateUrl : "client/js/Modules/Welcome/WelcomePartial.html"
					});
			}]);

		}());
});


