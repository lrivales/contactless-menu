const router = require('express').Router();
//import modules and models
const sequelize = require('../config/connection');
const { Customer, Employee, Menu_Category, Menu_Item, Order_Item, Order } = require('../models');
//import node fetch
const fetch = require('node-fetch');

//specify which template to use
router.get('/', (req, res) => {
  console.log(req.session);
  res.render('homepage');
});

router.get('/menu', (req, res) => {
  Menu_Category.findAll({
    include: [
      {
        model: Menu_Item,
        attributes: ['id', 'name', 'description', 'category_id']
      }
    ]
  })
    .then(dbMenuData => {
      const menu = dbMenuData.map(item => item.get({ plain: true }));
      res.render('menu', {
        menu
      })
      // res.json(dbMenuData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//login handlebars page unless already logged in (session)
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/orders');
    return;
  }

  res.render('login');
});

/*node fetch version
router.get('/orders', async (req, res) => {
  await fetch('http://localhost:3001/api/orders/')
  .then(res => res.json(res))*/ 
  
//send orders by employee to orders.handlebars page - use node fetch here?
router.get('/orders', (req, res) => {
  if (!req.session.user_id) {
    return res.redirect('/login');
  }
  Order.findAll({
    where: {
      employee_id: req.session.user_id
    },
    include: [
      {
        model: Customer,
        attributes: ['first_name', 'last_name']
      },
      {
        model: Employee,
        attributes: ['first_name', 'last_name']
      },
      {
        model: Menu_Item,
        attributes: ['name'],
        through: Order_Item,
    }
    ]
  }
  )
    .then(dbOrderData => {
      console.log('another orders view', dbOrderData)
      const orders = dbOrderData.map(order => order.get({ plain: true }));
      console.log(orders)
      res.render('orders', { orders });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/cart/:id', (req, res) => {
  Order.findOne({
    where: {
      id: req.params.id
    }
  })
  res.render('cart');

});

module.exports = router;