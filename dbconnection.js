const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'mysql-113046-0.cloudclusters.net',
    user: 'dbadmin',
    password: 'Admin@23#!',
    database: 'nodeapi',
    port: 19819
});

module.exports = connection;