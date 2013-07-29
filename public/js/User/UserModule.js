/*global angular, define, document*/

define(["angular",
	"js/User/LoginController",
	"js/User/UserFactory"], function(angular, loginController, userFactory) {

	return (function(){

		var userModule = angular.module("userModule", []);


		userModule.factory("userFactory", userFactory);

		userModule.controller("loginController", ["$scope", "$rootScope", "userFactory", loginController]);


		angular.bootstrap(document.getElementById("userModuleId"), ["userModule"]);

	}());

});