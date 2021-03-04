const express = require("express");
const app = express();

//let plants = require('./plants.json')

let plants = [
    {
        id: 1,
        title: "This one will bite your toes of"
    },
    {
        id: 2,
        dangerLevel: "9.8"
    }

];


app.get('/plants', (req, res) => {
    res.send({ plants: plants });
});

// todo implement the other GET method

app.get('/plants/:id', (req, res) => {
    const plantId = Number(req.params.id);
    const foundPlant = plants.find(plant => plant.id === plantId);
    if (!plantId) res.status(404).send('The plant with the given ID was not found')// return a status code 404 -- not found
    res.send({ foundPlant: foundPlant });
});


app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is running on port:", 8080);
    }
});