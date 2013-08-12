/*global angular, define, document*/

define(["angular",
	"js/Modules/Dashboard/DashboardController"], function(angular, dashboardController) {

	return (function(){

		var dashboardModule = angular.module("dashboardModule", []);

		dashboardModule.config(["$routeProvider", function($routeProvider) {
			$routeProvider.when("/dashboard",
				{
					controller : ["$scope", "$rootScope", dashboardController],
					templateUrl : "client/js/Modules/Dashboard/DashboardPartial.html"
				});
		}]);

	}());

});