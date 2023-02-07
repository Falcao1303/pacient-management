const mysql = require('mysql');


let db = mysql.createPool({
    host: '127.0.0.1',
    port: 3307,
    user: 'root',
    password: 'admin',
    database: 'clinic'
})

module.exports = db;