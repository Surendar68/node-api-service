const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbadmin',
    password: 'Admin@123#!',
    database: 'node-database'
});

module.exports = connection;