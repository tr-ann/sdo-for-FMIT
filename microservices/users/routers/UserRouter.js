export default router = require('express').Router()
const userController = require('../controllers/UserController')

router.get('/:id', [], userController.readById);
router.post('/:id', userController.update);
router.delete('/:id', userController.destroy);
router.get('/', userController.list);
router.post('/', userController.create);