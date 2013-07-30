/*global define, angular*/

define([
	"angular",
	"js/Modules/Test/TestController"],
	function(angular, testController) {

		return (function() {

			var testModule = angular.module("testModule", []);

			testModule.config(["$routeProvider", function($routeProvider) {
				$routeProvider.when("/test",
					{
						controller : ["$scope", "$rootScope", testController],
						templateUrl : "client/js/Modules/Test/TestPartial.html"
					});
			}]);

		}());
});


