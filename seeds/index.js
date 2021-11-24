const sequelize = require('../config/connection');
const seedCustomers = require('./customer-seeds');
const seedEmployees = require('./employee-seeds');
const seedMenuCategories = require('./menu_category-seeds');
const seedMenuItems = require('./menu_item-seeds');
const seedOrders = require('./order-seeds');
const seedOrderItems = require('./order_item-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCustomers();
  console.log('\n----- CUSTOMERS SEEDED -----\n');

  await seedEmployees();
  console.log('\n----- EMPLOYEES SEEDED -----\n');

  await seedMenuCategories();
  console.log('\n----- MENU CATEGORIES SEEDED -----\n');

  await seedMenuItems();
  console.log('\n----- MENU ITEMS SEEDED -----\n');

  await seedOrders();
  console.log('\n----- ORDERS SEEDED -----\n');

  await seedOrderItems();
  console.log('\n----- ORDER ITEMS SEEDED -----\n');

  process.exit(0);
};

seedAll();