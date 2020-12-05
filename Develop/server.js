// Require express
var express = require("express");

// Create express app
var app = express();

// Setup port
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Require routers
require("./routes/api_route.js")(app);
require("./routes/html_route.js")(app);

// Listener to start server
app.listen(PORT, function() {
    console.log("App listenton on PORT: " + PORT);
});