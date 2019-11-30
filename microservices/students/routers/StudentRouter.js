export default router = require('express').Router()
const studentController = require('../controllers/StudentController')

router.get('/:id', [], studentController.readById);
router.post('/:id', studentController.update);
router.delete('/:id', studentController.destroy);
router.get('/', studentController.list);
router.post('/', studentController.create);
