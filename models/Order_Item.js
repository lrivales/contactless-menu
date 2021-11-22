const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order_Item extends Model {}

Order_Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        order_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'order',
                key: 'id'
            }
        },
        item_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'menu_item',
                key: 'id'
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'order_item'
    }
)

module.exports = Order_Item;