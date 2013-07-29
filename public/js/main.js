/*global require*/

require.config({
	baseUrl : "client",
	paths : {
		angular : "lib/angular"
	},
	shim : {
		angular : {
			exports : "angular"
		}
	}
});


require(["angular",
	"js/Module/MainModule/MainModule",
	"js/User/UserModule"], function(angular, mainModule, userModule){


});


