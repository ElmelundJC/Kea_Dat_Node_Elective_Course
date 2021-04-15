const router = require("express").Router();

//dummy route - an object that contains all the "dummy" objects, it is not an actual server.

// project schema
// what datatype makes sence?
// what values can a project have?
// {
//     title: String,
//     description: String,
//     gitURL: String,
//     images: String Array,
//     technologiesInvolved: String Array
// }

const projects = [
    {
        title: "Nodefolio",
        description: "Created a personal portfolio with Node.js",
        gitURL: "https://github.com/ElmelundJC/Kea_Dat_Node_Elective_Course.git/1/5._Nodefolio",
        images: [],
        technologiesInvolved: ["Node.js", "Html", "CSS"]
    }
];


router.get("/api/projects", (req, res) => {
    res.send({ projects })
});

module.exports = {
    router
};