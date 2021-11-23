const router = require('express').Router();
const { Customer, Employee, Menu_Category, Menu_Item, Order_Item, Order } = require('../../models');

// get all menu items with category name
router.get('/', (req, res) => {
    Menu_Item.findAll(
        {
            include: {
                model: Menu_Category,
                attributes: ['name']
            }
        }
    )
    .then(dbMenuItemData => res.json(dbMenuItemData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get menu item by id with category name
router.get('/:id', (req, res) => {
    Menu_Item.findAll(
        {
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Menu_Category,
                    attributes: ['name']
                }
            ]
        }
    )
    .then(dbMenuItemData => res.json(dbMenuItemData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// add menu item
router.post('/', (req, res) => {
    Menu_Item.create(
        {
            name: req.body.name,
            description: req.body.description,
            category_id: req.body.category_id
        }
    )
    .then(dbMenuItemData => res.json(dbMenuItemData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update menu item
router.put('/:id', (req, res) => {
    Menu_Item.update(
        {
            name: req.body.name,
            description: req.body.description,
            category_id: req.body.category_id
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbMenuItemData => {
        if (!dbMenuItemData) {
            res.status(404).json({ message: 'Menu item ID not found.'});
            return;
        }
        res.json(dbMenuItemData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete menu item
router.delete('/:id', (req, res) => {
    Menu_Item.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbMenuItemData => {
        if (!dbMenuItemData) {
            res.status(404).json({ message: 'Menu item ID not found.'});
            return;
        }
        res.json(dbMenuItemData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;