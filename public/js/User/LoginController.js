/*global userModule, define */


define(["js/User/UserService"], function() {
    return function($scope, userService) {
        $scope.showForm = true;

        function getMe() {
            userService.getMe(function(error, result) {
                if(!error) {
                    console.log(result);
                }
            });
        }


        $scope.submitForm = function() {

            userService.login($scope.username, $scope.password, function(error, result) {
                if(!error) {
                    console.log(result);
                    $scope.showForm = false;
                    getMe();
                }
            });
        };
    };
});
