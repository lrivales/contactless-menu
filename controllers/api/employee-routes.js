const router = require('express').Router();
const { Customer, Employee, Menu_Category, Menu_Item, Order_Item, Order } = require('../../models');

// get all employees
router.get('/', (req, res) => {
    Employee.findAll()
    .then(dbEmployeeData => res.json(dbEmployeeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get employee by id
router.get('/:id', (req, res) => {
    Employee.findAll(
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbEmployeeData => {
        if (!dbEmployeeData) {
            res.status(404).json({ message: 'Employee ID not found.'});
            return;
        }
        res.json(dbEmployeeData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// add employee
router.post('/', (req, res) => {
    Employee.create(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password
        }
    )
    .then(dbEmployeeData => res.json(dbEmployeeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update employee
router.put('/:id', (req, res) => {
    Employee.update(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password
        },
        {
            individualHooks: true,
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbEmployeeData => {
        if (!dbEmployeeData) {
            res.status(404).json({ message: 'Employee ID not found.'});
            return;
        }
        res.json(dbEmployeeData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete employee
router.delete('/:id', (req, res) => {
    Employee.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbEmployeeData => {
        if (!dbEmployeeData) {
            res.status(404).json({ message: 'Employee ID not found.'});
            return;
        }
        res.json(dbEmployeeData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;