const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order_Item extends Model {}

Order_Item.init(
    {
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'order_item'
    }
)

module.exports = Order_Item;