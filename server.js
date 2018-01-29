
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/* var contactFormPath = path.resolve(__dirname, 'contactForm');
var cssPath = path.resolve(__dirname, 'css');
var imgPath = path.resolve(__dirname, 'img');
var jsPath = path.resolve(__dirname, 'js');
var libPath = path.resolve(__dirname, 'lib');
app.use(express.static(contactFormPath));
app.use(express.static(__dirname + '/css'));
app.use(express.static(imgPath));
app.use(express.static(jsPath));
app.use(express.static(libPath)); */
app.use(express.static('.'));

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
