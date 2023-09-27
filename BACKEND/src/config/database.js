const mysql2 = require ('mysql2');

const database = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'tutorial',
 });

module.exports = database;
 