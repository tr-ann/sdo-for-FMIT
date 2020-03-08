const { Router } = require('express');
const LessonController = require('../controllers/LessonController');
const { tryCatch } = require('../../../helpers');

const router = Router()

router.get('/:id', tryCatch(LessonController.readById));
router.post('/:id', tryCatch(LessonController.update));
router.delete('/:id', tryCatch(LessonController.destroy));
router.get('/', tryCatch(LessonController.readAll));
router.post('/', tryCatch(LessonController.create));

module.exports = router;