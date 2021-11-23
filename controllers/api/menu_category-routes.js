const router = require('express').Router();
const { Customer, Employee, Menu_Category, Menu_Item, Order_Item, Order } = require('../../models');

// get all menu categories
router.get('/', (req, res) => {
    Menu_Category.findAll()
    .then(dbMenuCategoryData => res.json(dbMenuCategoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get menu category by id
router.get('/:id', (req, res) => {
    Menu_Category.findAll(
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbMenuCategoryData => {
        if (!dbMenuCategoryData) {
            res.status(404).json({ message: 'Menu category ID not found.'});
            return;
        }
        res.json(dbMenuCategoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// add new menu category
router.post('/', (req, res) => {
    Menu_Category.create(
        {
            name: req.body.name,
            description: req.body.description
        }
    )
    .then(dbMenuCategoryData => res.json(dbMenuCategoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update menu category
router.put('/:id', (req, res) => {
    Menu_Category.update(
        {
            name: req.body.name,
            description: req.body.description
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbMenuCategoryData => {
        if (!dbMenuCategoryData) {
            res.status(404).json({ message: 'Menu category ID not found.'});
            return;
        }
        res.json(dbMenuCategoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete menu category
router.delete('/:id', (req, res) => {
    Menu_Category.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbMenuCategoryData => {
        if (!dbMenuCategoryData) {
            res.status(404).json({ message: 'Menu category ID not found.'});
            return;
        }
        res.json(dbMenuCategoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;