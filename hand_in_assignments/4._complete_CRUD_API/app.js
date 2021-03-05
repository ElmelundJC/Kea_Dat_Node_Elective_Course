const express = require('express');
const app = express();

app.use(express.json());

let dragons = [
    {
        id: 1,
        special: "fire_beast",
        danger_level: 8.5
    },
    {
        id: 2,
        special: "iron_tail",
        danger_level: 6.8
    },
    {
        id: 3,
        special: "ice_breath",
        danger_level: 9.1
    }
]


app.get('/dragons', (req, res) => {
    res.send(dragons);
});

app.get('/dragons/:id', (req, res) => {
    const dragon = dragons.find(c => c.id === parseInt(req.params.id));
    if (!dragon) res.status(404).send('The dragon with the given ID was not found')// return a status code 404 -- not found
    res.send(dragon);
});

app.post('/dragons', (req, res) => {
    const dragon = {
        id: dragons.length + 1,
        special: req.body.special,
        danger_level: req.body.danger_level
    }

    dragons.push(dragon);
    res.send(dragon);
    // const dragon = req.body;
    // dragons.push(dragon);
    // res.send(`dragon with the id ${dragon.id} added`);
});

app.put('/dragons/:id', (req, res) => {
    const dragon = dragons.find(drake => drake.id === parseInt(req.params.id));
    if (!dragon) return res.status(404).send('The dragon with the given ID was not found.');
    dragon.id = dragons.length;
    dragon.special = req.body.special;
    dragon.danger_level = req.body.danger_level;
    res.send(dragon);
});


app.delete('/dragons/:id', (req, res) => {
    const dragon = dragons.find(drake => drake.id === parseInt(req.params.id));

    const index = dragons.indexOf(dragon);
    dragons.splice(index, 1);

    res.send(dragon);
});



app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log('Server is running on port:', 8080);
});