const router = require('express').Router();
const customerRoutes = require('./customer-routes');

router.use('/customers', customerRoutes);

module.exports = router;