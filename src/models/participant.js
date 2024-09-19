const {DataTypes} = require('sequelize');
const sequelize = require('../config/config');
const Event = require('./event');

const Participant = sequelize.define('participant',{
    nome: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(80),
        allowNull: false
    },
    eventoId:{
        type: DataTypes.INTEGER,
        references: {
            model: Event,
            key: 'id',
        }
    }
});
module.exports = Participant;