const { Order_Item } = require('../models');

const orderItemData = [
    {
        "quantity": 1,
        "order_id": 1,
        "menu_item_id": 1
    },
    {
        "quantity": 1,
        "order_id": 1,
        "menu_item_id": 3
    },
    {
        "quantity": 1,
        "order_id": 1,
        "menu_item_id": 5
    },
    {
        "quantity": 1,
        "order_id": 1,
        "menu_item_id": 7
    },
    {
        "quantity": 1,
        "order_id": 1,
        "menu_item_id": 8
    },
    {
        "quantity": 1,
        "order_id": 1,
        "menu_item_id": 10
    },
    
    {
        "quantity": 1,
        "order_id": 2,
        "menu_item_id": 2
    },
    {
        "quantity": 1,
        "order_id": 2,
        "menu_item_id": 4
    },
    {
        "quantity": 1,
        "order_id": 2,
        "menu_item_id": 6
    },
    {
        "quantity": 1,
        "order_id": 2,
        "menu_item_id": 7
    },
    {
        "quantity": 1,
        "order_id": 2,
        "menu_item_id": 9
    },
    {
        "quantity": 1,
        "order_id": 2,
        "menu_item_id": 11
    },

    {
        "quantity": 1,
        "order_id": 3,
        "menu_item_id": 1
    },
    {
        "quantity": 1,
        "order_id": 3,
        "menu_item_id": 2
    },
    {
        "quantity": 2,
        "order_id": 3,
        "menu_item_id": 4
    },
    {
        "quantity": 1,
        "order_id": 3,
        "menu_item_id": 6
    },
    {
        "quantity": 2,
        "order_id": 3,
        "menu_item_id": 5
    },
    {
        "quantity": 2,
        "order_id": 3,
        "menu_item_id": 7
    },
    {
        "quantity": 1,
        "order_id": 3,
        "menu_item_id": 10
    },
    {
        "quantity": 1,
        "order_id": 3,
        "menu_item_id": 11
    }
]

const seedOrderItems = () => Order_Item.bulkCreate(orderItemData);

module.exports = seedOrderItems;