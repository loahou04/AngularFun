/*global userModule, define */


define([], function() {
    return function($scope, $rootScope, userFactory) {
        $scope.showForm = true;

        function getMe() {
            userFactory.getMe(function(error, result) {
                if(!error) {
                    console.log("broadcasting");
                    $rootScope.$emit("loginSuccessful", {result:result});
                }
            });
        }


        $scope.submitForm = function() {

            userFactory.login($scope.username, $scope.password, function(error, result) {
                if(!error) {
                    console.log(result);
                    $scope.showForm = false;
                    getMe();

                }
            });
        };
    };
});
