const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-compelete",
  password: "nody1234",
});

module.exports = pool.promise();
