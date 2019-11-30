const router = require('express').Router()
const userController = require('../controllers/facultyController')

router.get('/:userId', userController.readById);
router.post('/:userId', userController.update);
router.delete('/:userId', userController.destroy);
router.get('/', userController.list);
router.post('/', userController.create);

module.exports = router;