const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Menu_Item extends Model {}

Menu_Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'menu_category',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'menu_item'
    }
)

module.exports = Menu_Item;