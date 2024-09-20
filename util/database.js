const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("node-compelete", "root", "nody1234", {
  dialect: "mysql",
  host: "localhost",
  
});

module.exports = sequelize;
