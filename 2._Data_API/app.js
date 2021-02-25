const express = require('express');
const app = express();

app.use(express.json());

// How do we send data through a GET request? --> through request parameter

// modify the URL so you are sending today as the path variable and 
// your name as the query string with the variable name "name"

// not in the assignment... perhaps it will say: It's Thursday, Anders

// create a route called querystrubg that returns an empty json
// for now call it in your browser while giving it a query string

// app.get('/querystring', (req, res) => {
//     let query = req.query;
//     console.log(query);
//     res.send({ query });
// });


// give it the query string value: the best value
// and return it to the client

app.get('/querystring', (req, res) => {
    //console.log(query);
    res.send({ query: req.query });
});


app.get('/pathvariable/:message/:title', (req, res) => {
    //console.log();
    res.send({
        message: req.params.message,
        title: req.params.title,
        rest: req.query
    });
});

// we are still working with path variables
// in the same route as above.. give it a title
// return the message with a title to the client


app.post('/whatever', (req, res) => {
    console.log(req.body)
    // todo: get what is in the body and send it back
    res.send({ body: req.body });
});


app.listen(8080);
