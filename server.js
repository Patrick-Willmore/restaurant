// Dependencies
// =============================================================
var express = require("express");
var bodyParser= require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 7500;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var characters = [
  {
 
    name: "Yoda",
    role: "Jedi Master",
    age: 900,

  },
  {

    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,

  },
  {

    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,

  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});



// Search for Specific Character (or all characters) - provides JSON


// Create New Characters - takes in JSON input


// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
