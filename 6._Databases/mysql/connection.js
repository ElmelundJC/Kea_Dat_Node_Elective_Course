require('dotenv').config();

const mysql      = require('mysql2');
const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE
});

console.log(process.env.DB_PASSWORD);

connection.connect();


// create an actors table id, name, height
// CREATE TABLE IF NOT EXIST actors (id INT_AUTOINCREMENT, name VARCHAR(70), height INT, PRIMARY KEY id)

if (process.argv.includes("--createdb")) {
    connection.query(`CREATE TABLE IF NOT EXISTS actors(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(70), height INT)`, (error, result) => {
        if (error) {
            throw error;
        }
        console.log(result);
        connection.end();
    });
}

const something = 4;

console.log({
    something: something
})


// key is connection, and the actual value is the whole connection above.
module.exports = {
    connection
};