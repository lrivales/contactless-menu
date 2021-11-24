const { Menu_Item } = require('../models');

const menuItemData = [
    {
      "name": "Buffalo Wings",
      "description": "Spicy giant wings.",
      "category_id": 1
    },
    {
      "name": "Nachos",
      "description": "Cheesy nachos with choice of meat.",
      "category_id": 1
    },
    {
      "name": "Ribeye Steak",
      "description": "12 oz ribeye steak with your choice of 2 sides.",
      "category_id": 2
    },
    {
      "name": "Grilled Chicken",
      "description": "1/4 chicken with your choice of 2 sides.",
      "category_id": 2
    },
    {
      "name": "Rice Pilaf",
      "description": null,
      "category_id": 3
    },
    {
      "name": "Fries",
      "description": null,
      "category_id": 3
    },
    {
      "name": "Mixed Vegetables",
      "description": null,
      "category_id": 3
    },
    {
      "name": "Ice Cream",
      "description": "Choose from the following flavors: chocolate, vanilla or strawberry",
      "category_id": 4
    },
    {
      "name": "Cake",
      "description": "Choose from the following flavors: chocolate or strawberry",
      "category_id": 4
    },
    {
      "name": "Soda",
      "description": null,
      "category_id": 5
    },
    {
      "name": "Water",
      "description": null,
      "category_id": 5
    },
    {
      "name": "Wine",
      "description": null,
      "category_id": 5
    }
]

const seedMenuItems = () => Menu_Item.bulkCreate(menuItemData);

module.exports = seedMenuItems;