var express = require("express");
var http = require("http");
var https = require("https");
var app = express();


app.use(express.static(__dirname));


http.createServer(app).listen(3000);

/*
	need to set this up at some point....
// This line is from the Node.js HTTPS documentation.
var options = {
  key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
  cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};
https.createServer(options, app).listen(443);*/