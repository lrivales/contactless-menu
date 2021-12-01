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

//login handlebars page unless already logged in (session)
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/orders');
    return;
  }

  res.render('login');
});

//send orders by employee to orders.handlebars page - use node fetch here?
router.get('/orders', (req, res) => {
  // res.render('orders', {
  //     id: 1,
  //     table_number: 1,
  //     completed: false,
  //     customer_id: 1,
  //     employee_id: 1,
  //     createdAt: "2021-11-25T00:55:46.000Z",
  //     updatedAt: "2021-11-25T00:55:46.000Z",
  //     customer: {
  //       first_name: "Jack",
  //       last_name: "Pott"
  //     },
  //     employee: {
  //       first_name: "Lawrence",
  //       last_name: "Rivales"
  //     }
  // })
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
      }
    ]
  }
  )
    .then(dbOrderData => {
      // is order.get correct here?
      const orders = dbOrderData.map(order => order.get({ plain: true }));
      console.log(orders)
      res.render('orders', { orders });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});

module.exports = router;