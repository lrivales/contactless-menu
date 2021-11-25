const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function hashPassword(password) {
    console.log(password);
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

class Employee extends Model {}

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'employee'
    }
)

Employee.beforeCreate(async (employee) => {
    const hashedPassword = await hashPassword(employee.password);
    employee.password = hashedPassword;
})

// use individualHooks: true in the update route for this to work
Employee.beforeUpdate(async (employee) => {
    const hashedPassword = await hashPassword(employee.password);
    employee.password = hashedPassword;
});

module.exports = Employee;