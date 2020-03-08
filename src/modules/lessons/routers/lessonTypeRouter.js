const { Router } = require('express');
const LessonTypeController = require('../controllers/LessonTypeController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(LessonTypeController.readById));
router.post('/:id', tryCatch(LessonTypeController.update));
router.delete('/:id', tryCatch(LessonTypeController.destroy));
router.get('/', tryCatch(LessonTypeController.readAll));
router.post('/', tryCatch(LessonTypeController.create));

module.exports = router;