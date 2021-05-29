const AppInfoController = require('../controllers/AppInfoController');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("masuk home api")
})
router.get('/aplikasi', AppInfoController.getAlldata);
router.get('/aplikasi/:id', AppInfoController.findId);
router.post('/aplikasi', AppInfoController.createApp);
router.put('/aplikasi/:id', AppInfoController.update);
router.delete('/aplikasi/:id', AppInfoController.delete);

module.exports = router;