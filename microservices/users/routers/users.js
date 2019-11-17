const router = require('express').Router()
const userController = require('../controllers/userController')

router.get('/users/:userId', userController.readById);
router.post('/users/:userId', userController.update);
router.delete('/users/:userId', userController.destroy);
router.get('/users', userController.list);
router.post('/users', userController.create);

module.exports = router;