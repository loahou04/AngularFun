/*global mainModule, define */


define([], function() {
	return function($scope, $rootScope, userFactory) {
		console.log(userFactory);//to show that i am inheriting from userModule

		$rootScope.$on("loginSuccessful", function(event, data) {
			$scope.someValue = "WelcomeController";
			console.log("scope", data.result);
        });
        $rootScope.$on("loginSuccessful", function(event, data) {
			$scope.someValue = "WelcomeController";
			console.log("rootScope", data.result);
        });

	};
});
