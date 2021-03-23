const express = require("express");
const app = express();

app.use(express.static('public'));




app.get('/', (req, res) => {
    //res.sendFile(__dirname + '/public/index/welcome.css');
    res.sendFile(__dirname + '/public/index/welcome.html');
});

app.get('/welcome', (req, res) => {
    res.sendFile(__dirname + '/public/index/welcome.html');
});

app.get('/week1', (req, res) => {
    res.sendFile(__dirname + '/public/weeks/first/week1.html');
});

app.get('/week1', (req, res) => {
    res.sendFile(__dirname + '/public/weeks/second/week2.html');
});

app.get('/week1', (req, res) => {
    res.sendFile(__dirname + '/public/weeks/third/week3.html');
});

app.get('/week1', (req, res) => {
    res.sendFile(__dirname + '/public/weeks/fourth/week4.html');
});

app.get('/week1', (req, res) => {
    res.sendFile(__dirname + '/public/weeks/fifth/week5.html');
});

app.get('/week1', (req, res) => {
    res.sendFile(__dirname + '/public/weeks/sixth/week6.html');
});

app.get('/week1', (req, res) => {
    res.sendFile(__dirname + '/public/weeks/seventh/week7.html');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port:", Number(PORT));
})