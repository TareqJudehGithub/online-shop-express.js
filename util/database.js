//to connect to SQL DB, and give us back connection object which allows
//us to query.
const mysql = require("mysql2");

const pool = mysql.createPool({
     host: "localhost",
     user: "root",
     database: "nodedb",
     password: "password"
});


module.exports = pool.promise();