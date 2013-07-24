var express = require("express");
var http = require("http");
var https = require("https");
var app = express();


app.use(express.static(__dirname));


var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on: " + port);
});