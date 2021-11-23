const router = require('express').Router();
const customerRoutes = require('./customer-routes');
const employeeRoutes = require('./employee-routes')

router.use('/customers', customerRoutes);
router.use('/employees', employeeRoutes);

module.exports = router;