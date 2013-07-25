var express = require("express");
var http = require("http");
var https = require("https");
var MongoClient = require("mongodb").MongoClient;
var app = express();
var UserModule = require("./nodeApp/Users.js");
var userModule;
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;


// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
	console.log(req.isAuthenticated());
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/');
}

function appStartUp() {

	/** middleware **/
	passport.serializeUser(function(user, done) {
		console.log("serializing");
		done(null, user);
	});
	passport.deserializeUser(function(user, done) {
		console.log("deserializing");
		done(null, user);
	});
	passport.use(new LocalStrategy(userModule.authenticateUserRequest));

	app.use(express.static(__dirname));
	// app.use(express.logger());
	app.use(express.cookieParser());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.session({ secret: 'keyboard cat' }));
	// Initialize Passport!  Also use passport.session() middleware, to support
	// persistent login sessions (recommended).
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(app.router);

	/** middleware **/

	app.post('/login',
	passport.authenticate('local', { failureFlash: false }),
		function(req, res) {
			res.send({user:req.user});
	});

	app.get("/users", ensureAuthenticated, userModule.getUser);

	var port = process.env.PORT || 3000;
	app.listen(port, function() {
		console.log("Listening on: " + port);
	});
}

MongoClient.connect("mongodb://localhost:27017/angularFun", function(err, db) {
	if(!err) {
		userModule = new UserModule(db);
		appStartUp();
	}
});




