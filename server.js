//sets up the server and connection to Mongoose

//DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");


// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

//LINKS TO MODEL FILES IN MODELS FOLDER
var Article = require("./models/article.js");

// Initialize Express
var app = express();


// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("public"));


// Database configuration
// // Save the URL of our database as well as the name of our collection
// var databaseUrl = "nytreact";
// var collections = ["articles"];

//connect to databse with mongoose 
mongoose.connect("mongodb://localhost/nytscrape");
var db = mongoose.connection;

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});
db.once("open", function() {
  console.log("Mongoose connection successful.");
});




//LISTENING AND PORT INFORMATION process.env.PORT || 
app.listen(process.env.PORT || 3000, function() {
  console.log("App running on port 3000!");
});
