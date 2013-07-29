/*global userModule, define */


define([], function() {
    return function($scope, $rootScope, userFactory) {
        $scope.showForm = true;
        $scope.$on("loginSuccessful", function(data, result){
            console.log("Got it from myself");
        });
        function getMe() {
            userFactory.getMe(function(error, result) {
                if(!error) {
                    console.log("broadcasting");
                }
            });
        }


        $scope.submitForm = function() {

            userFactory.login($scope.username, $scope.password, function(error, result) {
                if(!error) {
                    //console.log(result);
                    $scope.showForm = false;
                    getMe();

                }
            });
        };
    };
});
