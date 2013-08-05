/*global mainModule, define */


define([], function() {
	return function($scope, $rootScope, userFactory) {

		$scope.userValid = false;

		$scope.$on("userData", function(event, data) {
			$scope.start();
		});

		$scope.init = function(){
			if(userFactory.me) {
				console.log("I'm HERE", userFactory.me);
				$scope.start();
			}
			else {
				console.log("NO ME");
			}
		};

		//because we need to wait to get use data
		//init is to find out if we have it
		//if we dont have it then its probably a reload of the page
		//so wthen we wait for the broadcast event
		$scope.start = function() {
			console.log("HERE WE GO");
		};

	};
});
