
const sequelize = require("../config/dbConfig.js");

const Sequelize = require("sequelize");


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


module.exports = db;
