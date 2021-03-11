const express = require("express");
const app = express();



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/welcome.html')
});

// PORT=3000 nodemon app.js
// 1. For Windows people figure out how to define environment variables
// 2. Console log the defined port


// create a new page
app.get('/dragons', (req, res) => {
    res.sendFile(__dirname + '/public/dragons.html');
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