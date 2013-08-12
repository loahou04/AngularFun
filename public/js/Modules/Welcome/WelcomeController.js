/*global mainModule, define */


define([], function() {
	return function($scope, $rootScope) {
		//console.log(userFactory);//to show that i am inheriting from userModule

		$scope.$on("userData", function(event, data) {
			$scope.someValue = data.result.username;
		});

		$scope.$on("logoutSuccessful", function(event) {
			$scope.someValue = "";
		});

		$scope.getMeData = function() {
			console.log($rootScope.me);
			// console.log("GETTING ME");
			// console.log(userFactory);
			// userFactory.getMe(function(err, result) {
			// 	if(!err) {
			// 		console.log(result);
			// 	}
			// 	else {
			// 		console.log(err);
			// 	}
			// });
		};

	};
});
