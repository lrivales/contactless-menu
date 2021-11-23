const { Menu_Category } = require('../models');

const menuCategoryData = [
    {
      "name": "Appetizers",
      "description": null
    },
    {
      "name": "Entrees",
      "description": null
    },
    {
      "name": "Sides",
      "description": null
    },
    {
      "name": "Desserts",
      "description": null
    },
    {
      "name": "Drinks",
      "description": null
    }
]

const seedMenuCategories = () => Menu_Category.bulkCreate(menuCategoryData);

module.exports = seedMenuCategories;