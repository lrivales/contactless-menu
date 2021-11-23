const router = require('express').Router();
const customerRoutes = require('./customer-routes');
const employeeRoutes = require('./employee-routes');
const menu_categoryRoutes = require('./menu_category-routes');

router.use('/customers', customerRoutes);
router.use('/employees', employeeRoutes);
router.use('/menu_categories', menu_categoryRoutes);

module.exports = router;