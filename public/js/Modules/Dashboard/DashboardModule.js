/*global angular, define, document*/

define(["angular",
	"js/Modules/User/UserModule",
	"js/Modules/Dashboard/DashboardController"], function(angular, userModule, dashboardController) {

	return (function(){

		var dashboardModule = angular.module("dashboardModule", ["userModule"]);

		dashboardModule.config(["$routeProvider", function($routeProvider) {
			$routeProvider.when("/dashboard",
				{
					controller : ["$scope", "$rootScope", "userFactory", dashboardController],
					templateUrl : "client/js/Modules/Dashboard/DashboardPartial.html"
				});
		}]);

	}());

});