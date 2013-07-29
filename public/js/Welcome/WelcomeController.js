/*global mainModule, define */


define([], function() {
	return function($scope, $rootScopej, userFactory) {
		console.log(userFactory);
		$scope.$on("loginSuccessful", function(event, data) {
            console.log("EMIT", data.result);
        });
		//$scope.someValue = "WelcomeController";
	};
});
