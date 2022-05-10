const mysql = require('mysql');


let db = mysql.createPool({
    host: 'mysqlserver.cr0n4ocjd4zx.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'admin1234',
    database: 'projects'
})

module.exports = db;