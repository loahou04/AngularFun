/*global userModule, define */


define([], function() {
	return function($scope, $rootScope, userFactory) {
		$scope.showForm = false;

		$scope.init = function() {

			if(userFactory.me !== null) {
				$scope.username = userFactory.me.username;
				return;
			}

			userFactory.getMe(function(err, result) {
				if(!err) {
					$scope.showForm = false;
					$scope.username = result.username;
					return;
				}
				$scope.showForm = true;
			});
		};

		$scope.submitForm = function() {

			userFactory.login($scope.username, $scope.password, function(error, result) {
				if(!error) {
					$scope.password = "";
					$scope.showForm = false;
				}
			});
		};

		$scope.logout = function() {

			userFactory.logout(function(error, result) {
				if(!error) {
					$scope.showForm = true;
				}
			});
		};
	};
});
