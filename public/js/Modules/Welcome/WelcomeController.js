/*global mainModule, define */


define([], function() {
	return function($scope, $rootScope, userFactory) {
		console.log(userFactory);//to show that i am inheriting from userModule

		$scope.$on("loginSuccessful", function(event, data) {
			$scope.someValue = data.result.username;
			console.log("scope", data.result);
		});

	};
});
