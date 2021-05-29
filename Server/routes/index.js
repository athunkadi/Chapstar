const router = require('express').Router();
const routerApp = require('./appinfo');

router.use('/api', routerApp);

module.exports = router;