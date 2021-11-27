const router = require('express').Router();
//import modules and models
const sequelize = require('../config/connection');
const { Customer, Employee, Menu_Category, Menu_Item, Order_Item, Order } = require('../models');
//import node fetch
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

//specify which template to use
router.get('/', (req, res) => {
  res.render('homepage');
});

//login handlebars page
router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;