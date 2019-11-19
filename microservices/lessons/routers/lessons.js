const router = require('express').Router()
const lessonController = require('../controllers/lessonController')

router.get('/:id', lessonController.readById);
router.post('/:id', lessonController.update);
router.delete('/:id', lessonController.destroy);
router.get('/', lessonController.readAll);
router.post('/', lessonController.create);

module.exports = router;