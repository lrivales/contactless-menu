const router = require('express').Router();
const { Customer, Employee, Menu_Category, Menu_Item, Order_Item, Order } = require('../../models');

// get all order items 
router.get('/', (req, res) => {
    Order_Item.findAll(
        {
            include: [
                {
                    model: Menu_Item,
                    attributes: ['name']
                }
            ]
        }
    )
    .then(dbOrderItemData => res.json(dbOrderItemData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get order items by order id
router.get('/:id', (req, res) => {
    Order_Item.findAll(
        {
            where: {
                order_id: req.params.id
            },
            include: [
                {
                    model: Menu_Item,
                    attributes: ['name']
                }
            ]
        }
    )
    .then(dbOrderItemData => res.json(dbOrderItemData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// post order items
router.post('/', (req, res) => {
    Order_Item.create(
        {
            order_id: req.body.order_id,
            menu_item_id: req.body.menu_item_id,
            quantity: req.body.quantity
        }
    )
    .then(dbOrderItemData => res.json(dbOrderItemData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update order item
router.put('/:order_id/:menu_item_id', (req, res) => {
    Order_Item.update(
        {
            quantity: req.body.quantity
        },
        {
            where: {
                order_id: req.params.order_id,
                menu_item_id: req.params.menu_item_id
            }
        }
    )
    .then(dbOrderItemData => res.json(dbOrderItemData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete order item
router.delete('/:order_id/:menu_item_id', (req, res) => {
    Order_Item.destroy(
        {
            where: {
                order_id: req.params.order_id,
                menu_item_id: req.params.menu_item_id
            }
        }
    )
    .then(dbOrderItemData => res.json(dbOrderItemData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;