// pulling from array of registered people in the system
var people = require("../data/people");

app.get("/api/people", function(req, res) {
    res.sendFile(people);
});

app.post("/api/people", function(req, res) {

    var match = {
        name: "",
        photo: ""
    };

    var clientChoice = req.body;

    for (i = 0; i < people.length; i++) {
        var current = people[i];
        var difference = 0;

    for (var j = 0; j < current.scores.length; j++) {
        var currentScore = current.scores[j];
        var userScore = clientChoice.scores[j];

        difference += Math.abs(parseInt(userScore) - parseInt(currentScore));
    }
    if (difference <= topMatch.personDifference) {

        topMatch.name = current.name;
        topMatch.photo = current.photo;
        topMatch.personDifference = difference;
    }
}

res.json(topMatch);
});