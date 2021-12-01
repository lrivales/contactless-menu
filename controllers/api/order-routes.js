const router = require('express').Router();
const { Customer, Employee, Menu_Category, Menu_Item, Order_Item, Order } = require('../../models');

// get all orders
router.get('/', (req, res) => {
    Order.findAll(
        {
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
    .then(dbOrderData => res.json(dbOrderData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get order by id
router.get('/:id', (req, res) => {
    Order.findAll(
        {
            where: {
                id: req.params.id
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
    .then(dbOrderData => res.json(dbOrderData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// add order
router.post('/', (req, res) => {
    Order.create(
        {
            table_number: req.body.table_number,
            customer_id: req.body.customer_id,
            employee_id: req.body.employee_id
        }
    )
    .then(dbOrderData => res.json(dbOrderData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update order
router.put('/:id', (req, res) => {
    Order.update(
        {
            table_number: req.body.table_number,
            customer_id: req.body.customer_id,
            employee_id: req.body.employee_id
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbOrderData => res.json(dbOrderData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete order
router.delete('/:id', (req, res) => {
    Order.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbOrderData => res.json(dbOrderData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;