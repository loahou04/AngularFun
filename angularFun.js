

var express = require("express");
var http = require("http");
var https = require("https");
var MongoClient = require("mongodb").MongoClient;
var app = express();
var UsersController = require("./nodeApp/UsersController.js");
var usersController;
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var fs = require("fs");

/*******NOTE*****
 for some reason we dont need to send
 resp.end() unless returning a file
 this is something i need to look into
 but everythign seems to be working right now...
******NOTE******/


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

	res.send(401);

}

function appStartUp() {

	/*************************** middleware setup *************************/
	passport.serializeUser(function(user, done) {
		console.log("serializing");
		done(null, user);
	});
	passport.deserializeUser(function(user, done) {
		console.log("deserializing");
		done(null, user);
	});
	passport.use(new LocalStrategy(usersController.authenticateUserRequest));

	//reserved word so wrapping it this way so jslint will shutup
	app.use("/client", express["static"](__dirname + "/public"));

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

	/*************************** middleware end *************************/


	/*************************** ROUTES START *************************/
	app.get("/", function(req, res) {
		fs.readFile('./index.html', function (err, html) {
			if (err) {
				throw err;
			}
			res.writeHeader(200, {"Content-Type": "text/html"});
			res.write(html);
			//this end is required otherwise it will hang...
			res.end();
		});
	});

	/********************** login specific middleware route ********************/
	app.post('/login', function(req, res, next) {
		passport.authenticate('local', function(err, user, info) {
			if (err) {
				return next(err);
			}
			if (!user) {
				return res.redirect('/login');
			}
			//manually calling login of the request object
			req.login(user, function(err) {
				if (err) {
					return next(err);
				}
				console.log(user);
				var userInfo = {
					username : user
				};
				console.log(userInfo);
				return res.json(200, userInfo);
			});
		})(req, res, next);
	});


	app.post('/logout', usersController.logout);

	app.get('/me', ensureAuthenticated, usersController.getMe);

	/*************************** ROUTES END *************************/

	var port = process.env.PORT || 3000;
	app.listen(port, function() {
		console.log("Listening on: " + port);
	});
}

MongoClient.connect("mongodb://localhost:27017/angularFun", function(err, db) {
	if(!err) {
		usersController = new UsersController(db);
		appStartUp();
	}
});




