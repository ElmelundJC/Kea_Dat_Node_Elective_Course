const express = require("express");
const app = express();

app.use(express.json());

// carnivorous plants
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

let id = plants.length;

app.get('/plants', (req, res) => {
    res.send({ data: plants });
});

// todo implement the other GET method

app.get('/plants/:id', (req, res) => {
    const plantId = Number(req.params.id);
    const foundPlant = plants.find(plant => plant.id === plantId);
    if (!plantId) res.status(404).send('The plant with the given ID was not found')// return a status code 404 -- not found
    res.send({ data: foundPlant });
});


// bonus: use cross-env in this project and allow the user to define a custom port
app.post("/plants/", (req, res) => {
    const newPlant = req.body;
    newPlant.id = ++id;
    plants.push(newPlant);
    res.send({ data: newPlant });
});

// finish it so that we can tell the client wther or not it found a plant to update
app.patch("/plants/:id", (req, res) => {
    // map
    plants = plants.map(plant => {
        let plantUpdated = false;
        if (plant.id === Number(req.params.id)) {
            plantUpdated = true;
            // can we unpack body?? spread operater
            return { ...plant, ...req.body, id: req.params.id }
        }
        return plant;
    });
    res.send({ data: plantUpdated });
});

app.delete("/plants/:id", (req, res) => {
    //  accessing the array once    
    const id = Number(req.params.id);
    const plants = plants.filter(plant => plant.id !== id);

    //   accessing the array twice
    //   const index = plants.indexOf(plantId);
    //   plants.splice(index, 1);
    res.send({});
});


app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is running on port:", 8080);
    }
});