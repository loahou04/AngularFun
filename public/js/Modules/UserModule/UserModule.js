/*global angular, cmModule, userModule*/


var userModule = angular.module("userModule", []);

userModule.controller("someController", function($scope) {
	$scope.newData = "realData";
});