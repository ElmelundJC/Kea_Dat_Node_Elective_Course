const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017"
const dbName = "movies";

// "https://[url]" --> ::/ protocol signifyer

MongoClient.connect(url, {useUnifiedTopology: true }, (error, client) => {
    if (error) {
        throw error;
    }

    const db = client.db(dbName);
    const actors = db.collection("actors");
    // I want to get the height of Danny Gianto what should i write on line 14? console.log(data[1]["height"])

    actors.find({name: "Danny Gianto"}).toArray((error, data) => {
        console.log(data)
        client.close();
    });
});