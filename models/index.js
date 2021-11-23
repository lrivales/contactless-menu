const Customer = require('./Customer');
const Employee = require('./Employee');
const Menu_Category = require('./Menu_Category');
const Menu_Item = require('./Menu_Item');
const Order = require('./Order');
const Order_Item = require('./Order_Item');

Customer.hasMany(Order, {
    foreignKey: 'customer_id'
});

Order.belongsTo(Customer, {
    foreignKey: 'customer_id'
});

Employee.hasMany(Order, {
    foreignKey: 'employee_id'
});

Order.belongsTo(Employee, {
    foreignKey: 'employee_id'
});

Menu_Category.hasMany(Menu_Item, {
    foreignKey: 'category_id'
});

Menu_Item.belongsTo(Menu_Category, {
    foreignKey: 'category_id'
});

Order.hasMany(Order_Item, {
    foreignKey: 'order_id'
});

Order_Item.belongsTo(Order, {
    foreignKey: 'order_id'
});

module.exports = { Customer, Employee, Menu_Category, Menu_Item, Order, Order_Item };