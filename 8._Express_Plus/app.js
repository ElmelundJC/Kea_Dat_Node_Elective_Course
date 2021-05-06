// We are importing and exporting through the module system instead of common js (require); module is defined in package.json
import express from "express";
//const express = require("express");
const app = express();

// to give Express some securety (helmet)
import helmet from "helmet";

app.use(helmet());

// ** from test.mjs
// import { goodValue as myBetterName } from "./test.mjs";
// console.log(myBetterName);


// middleware --> order of the routes matters! 
//                make sure to place the ipLogger(you middleware). works very well combined with next()


/*
How to get an external library in our HTML files
- Get from the CDN
- Put in our client in a script file and include it (serve statically)
- Get from NPM - copy files over from NPM manually
               - Point to the file from the html script tag (src) .. remember to serve that single file statically / folder
*/

// Works great with an authentication page or login system.. limit the access of a user on your page
// it is smart because as a middleware it checks/runs/works before our routes
import rateLimit from "express-rate-limit";

const basicLimiter = rateLimit({
    windowMs = 15 * 60 * 1000, // 15 minustes
    max: 100 // limit each IP to 100 requests per window 
});

const authlimiter = rateLimit({
    windowMs = 15 * 60 * 1000, // 15 minutes
    max: 10 // limit each IP to 10 requests per window
});

app.use(basicLimiter); // this hits all the routes
app.use("/auth/*", authlimiter);


app.get("/auth/login", (req, res, next) => {
    res.send({ message: "Login ....." })
});

const ipLogger = (req, res, next) => {
    console.log(req.ip);
    next();
}

app.get("/", ipLogger,(req, res, next) => {
    // res.send(`<h1>First</h1>`);
    console.log("it hits me... oh yeah");
    next();
});
    
    
app.get("/", (req, res) => {
    res.send(`<h1>Second</h1>`);
});
    
app.get("/house/door", (req, res) => { 
    res.send(`<h1>You've come to the right place</h1>`);
});
    
app.get("/house/*", (req, res) => {
    res.send(`This house now features that.`);
});

app.get("/*", (req, res) => {
    res.status(404).send(`<h1>Sowwy.. the page you're looking for doesnt exist.</h1>`);
});



app.listen(8080, (error) => {
    console.log("Server is running on:", 8080);
});