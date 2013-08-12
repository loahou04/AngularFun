/*global mainModule, define */


define([], function() {
	return function($scope, $rootScope) {

		$scope.userValid = false;

		$scope.$on("userData", function(event, data) {
			$scope.start();
		});

		$scope.init = function() {
			// if(userFactory.me) {
			// 	console.log("I'm HERE", userFactory.me);
			// 	$scope.start();
			// }
			// else {
			// 	console.log("NO ME");
			// }
		};

		//because we need to wait to get user data
		//init is to find out if we have it
		//if we dont have it then its probably a reload of the page
		//so then we wait for the broadcast event
		$scope.start = function() {
			$scope.userValid = true;
			console.log("HERE WE GO");
		};

	};
});
