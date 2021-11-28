const router = require('express').Router();
const apiRoutes = require('./api');
//connect homepage routes
const homeRoutes = require('./home-routes.js');

router.use('/api', apiRoutes);

//homepage routes
router.use('/', homeRoutes);

//additional routes add before res.status(404)


router.use((req, res) => {
    res.status(404).end();
});



module.exports = router;