const express = require("express");
const app = express();

// to solve the assigment create a dataype to store the data in
// implement the two GET endpoints .. you can hardcode the id

app.get("/", (req, res) => {
    res.send({ message: "This is my response" });
});

app.listen(8080);