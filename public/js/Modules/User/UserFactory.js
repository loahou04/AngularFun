/*global userModule, define*/


define([], function() {

	return function($http, $rootScope) {

		var userFactory  = {};

		userFactory.login = function(username, password, callback) {
			var body = "username=" + username + "&password=" + password;
			$http({
				url:'/login',
				method: "POST",
				data: body,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).success(function(data, status, headers, config) {
				console.log("/login success");
				console.log(data);
				$rootScope.$broadcast("userData", {result:data});
				callback(null, data);

			}).error(function(data, status) {
				console.log("ERR");
				callback(data, null);
			});
		};

		userFactory.getMe = function(callback) {

			if($rootScope.me === null || $rootScope.me === undefined) {
				$http({
					url:'/me',
					method: "get",
					headers: {
						'Content-Type': 'application/json'
					}
				}).success(function(data, status, headers, config) {
					console.log("/me success");
					$rootScope.me = data;
					$rootScope.$broadcast("userData", {result:data});
					callback(null, data);

				}).error(function(data, status) {
					console.log("ERR");
					callback(data, null);
				});
				return;
			}

			//callback(null, $rootScope.me);

		};

		userFactory.logout = function(callback) {
			$http({
				url:'/logout',
				method:"post"
			}).success(function(data, status, headers, config) {
				console.log("successful logout");
				$rootScope.me = null;
				$rootScope.$broadcast("logoutSuccessful");
				callback(null, {});
			})
			.error(function(data, status) {
				console.log("ERROR IN LOGOUT");
				callback(data, null);
			});
		};

		return userFactory;
	};
});
