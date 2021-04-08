const express = require("express");
const app = express();

app.use(express.static('public'));

app.get('/proxy', (req, res) => {
    res.sendFile(__dirname + "/public/google/proxy.html");
});

app.listen(8000);