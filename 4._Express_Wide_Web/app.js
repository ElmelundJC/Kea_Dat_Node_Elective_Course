const express = require("express");
const app = express();

// this line makes the folder public available for the client to see. In basic we are telling the application to send more than just the HTML-file. so the folder 'public' is getting send to the client aswell
app.use(express.static('public'));



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/welcome/welcome.html');
});

// PORT=3000 nodemon app.js
// 1. For Windows people figure out how to define environment variables
// 2. Console log the defined port


// create a new page
app.get('/dragons', (req, res) => {
    res.sendFile(__dirname + '/public/dragons/dragons.html');
});



app.get("/potato", (req, res) => {
    if (req.query.value === "spud") {
        // Need to return so that line 25 does not execute and try to send another response for the same request
        return res.send({ type: "petite potato"});
    }
    return res.send({ lifePhilosophy: "My life is potato. I have potato blood in my veins."});
});



// process is working as our "main", env is the environment.
// console.log(process.env.PORT);
// use the environment variable if it's set otherwise use a fallback port
const PORT = process.env.PORT || 8080;

app.listen(PORT, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port:", Number(PORT));
})