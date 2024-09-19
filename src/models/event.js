const {DataTypes} = require('sequelize');
const sequelize = require('../config/config');

const Event = sequelize.define('event',{
    nome:{
        type: DataTypes.STRING(60),
        allowNull: false
    },
    data:{
        type: DataTypes.DATE,
        allowNull: false
    },
    localizacao:{
        type: DataTypes.STRING(150),
        allowNull: false
    }
});

module.exports = Event