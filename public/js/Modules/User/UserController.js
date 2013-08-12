/*global userModule, define, document */


define([], function() {
	return function($scope, $rootScope, userFactory) {
		$scope.showForm = true;

		$scope.init = function() {

			if($rootScope.me === null || $rootScope.me === undefined) {
				//below here is really for a page refresh
				userFactory.getMe(function(err, result) {
					if(!err) {
						$scope.username = result.username;
						$scope.showForm = false;
					}
				});
				return;
			}

			$scope.username = $rootScope.me;
			$scope.showForm = false;

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
