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
	"js/Module/MainModule/MainModule"], function(angular, mainModule, userModule){


});


