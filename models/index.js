const Customer = require('./Customer');
const Employee = require('./Employee');
const Menu_Category = require('./Menu_Category');
const Menu_Item = require('./Menu_Item');
const Order = require('./Order');
const Order_Item = require('./Order_Item');

Customer.hasOne(Order,{
    foreignKey: 'customer_id'
});

Order.belongsTo(Customer);

Employee.hasMany(Order, {
    foreignKey: 'employee_id'
});

Order.belongsTo(Employee);

Menu_Category.hasMany(Menu_Item, {
    foreignKey: 'category_id'
});

Menu_Item.belongsTo(Menu_Category);

Order.hasMany(Order_Item, {
    foreignKey: 'order_id'
});

Order_Item.belongsTo(Order);

module.exports = { Customer, Employee, Menu_Category, Menu_Item, Order, Order_Item };