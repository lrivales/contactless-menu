const { Order } = require('../models');

const orderData = [
    {
        "table_number": 1,
        "customer_id": 1,
        "employee_id": 1
    },
    {
        "table_number": 2,
        "customer_id": 2,
        "employee_id": 2
    },
    {
        "table_number": 3,
        "customer_id": 3,
        "employee_id": 3
    },
    {
        "table_number": 4,
        "customer_id": 4,
        "employee_id": 1
    },
    {
        "table_number": 5,
        "customer_id": 5,
        "employee_id": 2
    }
]

const seedOrders = () => Order.bulkCreate(orderData);

module.exports = seedOrders;