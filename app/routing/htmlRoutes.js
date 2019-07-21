// resources
var path = require("path");

// displays when client is on survey
app.get("/survey", function(req, res) {
    res.sendFile(__dirname, "/../public/survey.html");
});

// default route
app.get("*", function(req, res) {
    res.sendFile(__dirname, "/../public/home.html");
});