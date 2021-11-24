const { Order } = require('../models');

const orderData = [
    {
        "table_number": 1,
        "completed": 0,
        "customer_id": 1,
        "employee_id": 1
    },
    {
        "table_number": 2,
        "completed": 0,
        "customer_id": 2,
        "employee_id": 2
    },
    {
        "table_number": 3,
        "completed": 0,
        "customer_id": 3,
        "employee_id": 3
    }
]

const seedOrders = () => Order.bulkCreate(orderData);

module.exports = seedOrders;