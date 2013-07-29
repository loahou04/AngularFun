/*global userModule, define*/


define([], function() {

	return function($http) {

		var userFactory  = {};

		//user.me = null;
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
				console.log("/loging success");
				callback(null, data);

			}).error(function(data, status) {
				console.log("ERR");
				callback(data, null);
			});
		};

		userFactory.getMe = function(callback) {
			//if(user.me === null) {
				$http({
					url:'/me',
					method: "get",
					headers: {
						'Content-Type': 'application/json'
					}
				}).success(function(data, status, headers, config) {
					console.log("/me success");
					callback(null, data);

				}).error(function(data, status) {
					console.log("ERR");
					callback(data, null);
				});
			//}

			//callback(null, user.me);

		};

		return userFactory;
	};
});