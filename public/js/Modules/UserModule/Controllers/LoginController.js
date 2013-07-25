/*global userModule */

userModule.controller("loginController", function($scope, $http) {
	$scope.showForm = true;

    function getMe() {
        $http({
            url:'/me',
            method: "get",
            headers: {
                     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).success(function(data, status, headers, config) {
            console.log("/me success");
            console.log(data);
            console.log(status);

        }).error(function(data, status) {
            console.log("ERR");
            console.log(data);
            console.log(status);
        });
    }


    $scope.submitForm = function() {
		console.log($scope.username);
		var body = "username=" + $scope.username + "&password=" + $scope.password;
		$http({
            url:'/login',
            method: "POST",
            data: body,
            headers: {
                     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).success(function(data, status, headers, config) {
        	console.log("/loging success");
            console.log(data);
        	$scope.showForm = false;
        	console.log(status);

            getMe();

        }).error(function(data, status) {
        	console.log("ERR");
        	console.log(data);
        	console.log(status);
        });
	};
});