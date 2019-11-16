var router = require('express').Router()
const userController = require('../controllers').users

/* GET users listing. */
router.get('/users', userController.list);
router.post('/users', userController.create);
router.get('/users/:userId', userController.readById);
router.post('/users/:userId', userController.update);
router.delete('/users/:userId', userController.destroy);

module.exports = router;