/*global define, angular*/

define([
	"angular",
	"js/Modules/Welcome/WelcomeController"],
	function(angular, welcomeController) {

		return (function(){

			var welcomeModule = angular.module("welcomeModule", []);

			welcomeModule.config(["$routeProvider", function($routeProvider) {
				$routeProvider.when("/welcome",
					{
						controller : ["$scope", "$rootScope", welcomeController],
						templateUrl : "client/js/Modules/Welcome/WelcomePartial.html"
					});
			}]);

		}());
});


