const express = require("express");
const app = express();

const fetch = require("node-fetch");
// Remember to install the library/module node-fetch as a dependecy


app.get("/proxy", (req, res) => {
    fetch("https://www.google.dk")
    .then(res => res.textConverted()) 
    .then(body => res.send(body));
});
// if textConverted() is used also remember to install -> "npm install encoding"
// removes minor flaws in the text when using forign symbols from the danish language

const server = app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port: ", server.address().port);
});

