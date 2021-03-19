const Sequelize = require("sequelize");

const sequelize = require("../util/databse");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  phone: Sequelize.INTEGER,
  email: Sequelize.STRING,
});

module.exports = User;
