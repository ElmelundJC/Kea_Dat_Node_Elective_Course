const express = require("express");
const app = express();

app.use(express.json()); // adding a piece of middlewear ???

// to solve the assigment create a datatype to store the data in
// implement the two GET endpoints .. you can hardcode the id (getAll & getById)

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

app.get("/", (req, res) => {
    res.send({ message: "This is my response" });
});


// Homework assignment Implement 2 get methods (all & getById) and read a datatype with stored data.
app.get("/api/courses", (req, res) => {
    res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found')// return a status code 404 -- not found
    res.send(course)
});

app.post("/api/courses", (req, res) => {
    if (!req.body.name || req.body.name.length < 3) {
        // Status code 400 Bad Request
        res.status(400).send("Name is required and should be minimum 3 characters");
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});


app.get("/", (req, res) => {

    res.send({ message: "This is my response" })
})

app.get("/newOne/id", (req, res) => {
    const id = 1;
    res.send({ "something": "That you can do" })
})

// Test try
// Created get api -> getting params, but the url has to have the parameter inserted for the page to read/show
// ex. localhost:8080/api/posts/2021/2
app.get("/api/posts/:year/:month", (req, res) => {
    res.send(req.params);
});


app.listen(8080);