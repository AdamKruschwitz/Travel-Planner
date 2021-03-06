const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {}

Location.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'NAME'
        }
    },
    {
        freezeTableName: true,
        sequelize,
        timestamps: false,
        modelName: 'location'
    }
)

module.exports = Location;