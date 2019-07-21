// resources required
var express = require("express");

//setting references
const app = express();
const port = 3000;

//listens for the server and confirms
app.listen(port, function() {
    console.log("Server at localhost:3000")
})

//To make sure that nested objects are actually read
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

