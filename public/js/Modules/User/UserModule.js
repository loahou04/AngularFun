/*global angular, define, document*/

define(["angular",
	"js/Modules/User/UserController",
	"js/Modules/User/UserFactory"], function(angular, userController, userFactory) {

	return (function(){

		var userModule = angular.module("userModule", []);
		userModule.factory("userFactory", ["$http", "$rootScope", userFactory]);

		userModule.controller("userController", ["$scope", "$rootScope", "userFactory", userController]);

	}());

});