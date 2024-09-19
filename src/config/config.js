const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('eventManager', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;