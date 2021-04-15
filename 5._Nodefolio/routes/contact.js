// create a contact route that is set up with our server
// create a /contact route that will be used by our form

const router = require("express").Router();

router.post("/contact", (req, res) => {
    //TODO send email
    res.redirect("/");
});


module.exports = {
    router 
};