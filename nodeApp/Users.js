module.exports = function(db) {

	var users = db.collection("users");

	var _passwordMatch = function(inputPassword, dbPassword) {

		/* TODO: add decryption of hashed password
		*/
		if(inputPassword === dbPassword) {
			return true;
		}
		return false;
	};

	this.authenticateUserRequest = function(username, password, done) {
		users.findOne({username:username}, function(err, user) {

			if(err) {
				return done(err);
			}
			if(!user) {
				return done(null, false, {message:"Username is not valid"});
			}
			if(!_passwordMatch(password, user.password)) {
				return done(null, false, {message:"Password did not match"});
			}
			console.log("user authenticated");
			return done(null, user);
		});

	};

	this.getUser = function(req, resp) {
		console.log(req.user);
		resp.send(200, "");
		resp.end();
	};

};