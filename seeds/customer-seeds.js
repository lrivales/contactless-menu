const { Customer } = require('../models');

const customerData = [
    {
        "first_name": "Jack",
        "last_name": "Pott",
        "email": "jackpott@email.com"
    },
    {
        "first_name": "Ray",
        "last_name": "Gunn",
        "email": "raygunn@email.com"
    },
    {
        "first_name": "Don",
        "last_name": "Key",
        "email": "donkey@email.com"
    },
    {
        "first_name": "Sonny",
        "last_name": "Day",
        "email": "sonnyday@email.com"
    },
    {
        "first_name": "Matt",
        "last_name": "Tress",
        "email": "matttress@email.com"
    }
]

const seedCustomers = () => Customer.bulkCreate(customerData);

module.exports = seedCustomers;