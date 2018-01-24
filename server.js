
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var js = require("/js");
var img = require("/img");
var css = require("/css");
var contactform = require("/contactform");
var lib = require("/lib")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/resume", function (req, res) {
  res.sendFile(path.join(__dirname, "resume.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
