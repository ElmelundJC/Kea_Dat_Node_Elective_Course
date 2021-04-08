const express = require("express");
const app = express();

const fetch = require("node-fetch");



app.get("/proxy", (req, res) => {
    fetch("https://www.google.dk")
    .then(res => res.textConverted())
    .then(body => res.send(body));
});

const server = app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port: ", server.address().port);
});

