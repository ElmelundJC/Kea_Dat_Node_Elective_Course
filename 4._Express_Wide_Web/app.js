const express = require("express");
const app = express();

// this line makes the folder public available for the client to see. In basic we are telling the application to send more than just the HTML-file. so the folder 'public' is getting send to the client aswell
app.use(express.static('public'));

const fetch = require("node-fetch");


// fetch("https://www.google.com")
// .then(res => res.text())
// .then(body => console.log(body));



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/welcome/welcome.html');
});


// create a new page
app.get('/dragons', (req, res) => {
    res.sendFile(__dirname + '/public/dragons/dragons.html');
});

// Lesson 8
app.get("/crypto", (req, res) => {
    res.sendFile(__dirname + '/public/crypto/crypto.html');
});


app.get("/safeport", (req, res) => {
    res.send({ message: "You are safe here. Nothing can hurt you." });
});

app.get("/dangerport", (req, res) => {
    res.redirect("/safeport");
});


app.get("/potato", (req, res) => {
    if (req.query.value === "spud") {
        // Need to return so that line 25 does not execute and try to send another response for the same request
        return res.send({ type: "petite potato" });
    }
    return res.send({ lifePhilosophy: "My life is potato. I have potato blood in my veins."});
});


app.get("/proxy", (req, res) => {
    fetch("https://www.google.com")
    .then(res => res.textConverted())
    .then(body => res.send(body));

});


// process is working as our "main", env is the environment.
// console.log(process.env.PORT);
// use the environment variable if it's set otherwise use a fallback port
const PORT = process.env.PORT || 8080;

// addresses a random port and saving in a variable
const server = app.listen(PORT, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port:", server.address().port);
});

console.log(process.env.PORT);
console.log(server.address().port);