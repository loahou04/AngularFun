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
			return done(null, user.username);
		});

	};

	this.getMe = function(req, resp) {

		users.findOne({username:req.user}, function(err, user) {

			if(err) {
				resp.send(500);
			}
			if(!user || user === null) {
				resp.send(404);
			}

			console.log("user found", user);
			var userInfo = {
				_id : user._id,
				username : user.username
				// firstName : user.firstName,
				// lastName : user.lastName,
				// email : user.email
			};
			resp.json(200, userInfo);

			//for some reason sending resp.end() makes it hang
			//but not sending it makes it end...weird...i'll look into it later
		});
	};

	this.logout = function(req, resp) {
		req.logout();
		resp.status(200);
		resp.end();
	};

};