const router = require('express').Router();
const { Customer, Employee, Menu_Category, Menu_Item, Order_Item, Order } = require('../../models');

// get all customers
router.get('/', (req, res) => {
    Customer.findAll()
    .then(dbCustomerData => res.json(dbCustomerData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get customer by id
router.get('/:id', (req, res) => {
    Customer.findAll(
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbCustomerData => {
        if (!dbCustomerData) {
            res.status(404).json({ message: 'Customer ID not found.'});
            return;
        }
        res.json(dbCustomerData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// add customer
router.post('/', (req, res) => {
    Customer.create(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }
    )
    .then(dbCustomerData => res.json(dbCustomerData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update customer
router.put('/:id', (req, res) => {
    Customer.update(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbCustomerData => {
        if (!dbCustomerData) {
            res.status(404).json({ message: 'Customer ID not found.'});
            return;
        }
        res.json(dbCustomerData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete customer
router.delete('/:id', (req, res) => {
    Customer.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbCustomerData => {
        if (!dbCustomerData) {
            res.status(404).json({ message: 'Customer ID not found.'});
            return;
        }
        res.json(dbCustomerData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;