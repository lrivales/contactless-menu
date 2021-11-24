const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model {}

Order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        table_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        customer_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'customer',
                key: 'id'
            }
        },
        employee_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'employee',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'order'
    }
)

module.exports = Order;