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
	"js/Modules/MainModule/MainModule"], function(angular, mainModule){


});


