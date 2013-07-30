/*global angular, define, document*/

define(["angular",
	"js/Modules/User/LoginController",
	"js/Modules/User/UserFactory"], function(angular, loginController, userFactory) {

	return (function(){

		var userModule = angular.module("userModule", []);
		userModule.factory("userFactory", ["$http", "$rootScope", userFactory]);

		userModule.controller("loginController", ["$scope", "$rootScope", "userFactory", loginController]);

	}());

});