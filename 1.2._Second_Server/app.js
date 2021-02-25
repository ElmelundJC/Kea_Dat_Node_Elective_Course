const express = require('express'); // require is the word to import a library. if we wants to keep playing around with the application, we put the library in a const
const app = express();
// to initialize the library we do it through another constant. but can be instatiated through a one liner like: const app = require("express")();

app.get("/", (req, res) => {
    res.send({});
});

app.get("/welcome", (req, res) => {
    res.send("<h1>Welcome</h1>")
});

// create a new route on the endpoint me that returns a json object that represents you

app.get("/me", (req, res) => {
    res.send({
        "name": "Christian",
        "age": 28,
        "Movie": "Pick of Destiny"
    });
});

app.get('about', (req, res) => {
    res.json({ "about": 1 })
});


app.listen(8080);
//define the port to listen on in the bottom, nice and easy to find.