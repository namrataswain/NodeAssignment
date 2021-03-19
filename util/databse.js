const Sequelize = require("sequelize");
const sequelize = new Sequelize("node_complete", "root", "db1234ns", {
  dialect: "mysql",
  host: "localhost",
  operatorsAliases: false,
});

module.exports = sequelize;
