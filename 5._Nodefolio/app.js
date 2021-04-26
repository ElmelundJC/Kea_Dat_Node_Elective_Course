const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // allows us to send/parse form-data

app.use(express.static('public'));

const projectsRoute = require("./routes/projects");
const contactRouter = require("./routes/contact");

app.use(projectsRoute.router);
app.use(contactRouter.router);

// SSR - Server side rendering
// read the frontpage.html file
// send the content in the route "/"

// in Node: Two types of read file methods
// - sync <- Use this because: 1. it's easier, 2. it halts the server upstart but that's not a problem cause it's needed before the routes should be accessible anyway and it won't take long
// - async

const fs = require("fs");
const { get } = require("http");

const nav = fs.readFileSync(__dirname + "/public/nav/nav.html", "utf-8");

const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8"); // also .toString("utf-8") after the route

const project = fs.readFileSync(__dirname + "/public/projects/projects.html", "utf-8");

const contact = fs.readFileSync(__dirname + "/public/contact/contact.html", "utf-8");

const about = fs.readFileSync(__dirname + "/public/about/aboutpage.html", "utf-8");

const skills = fs.readFileSync(__dirname + "/public/skills/skillspage.html", "utf-8");

const resume = fs.readFileSync(__dirname + "/public/resume/resumepage.html", "utf-8");

app.get("/", (req, res) => {
    res.send(nav + frontpage + footer);
});

app.get("/about", (req, res) => {
    res.send(nav + about + footer);
});

app.get("/projects", (req, res) => {
    res.send(nav + project + footer);
});

app.get("/skills", (req, res) => {
    res.send(nav + skills + footer);
});

app.get("/resume", (req, res) => {
    res.send(nav + resume + footer);
});

app.get("/contact", (req, res) => {
    res.send(nav + contact + footer);
});



const server = app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port ", server.address().port);
});