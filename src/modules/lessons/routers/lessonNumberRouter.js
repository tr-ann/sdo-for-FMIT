const { Router } = require('express');
const LessonNumberController = require('../controllers/LessonNumberController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(LessonNumberController.readById));
router.post('/:id', tryCatch(LessonNumberController.update));
router.delete('/:id', tryCatch(LessonNumberController.destroy));
router.get('/', tryCatch(LessonNumberController.readAll));
router.post('/', tryCatch(LessonNumberController.create));

module.exports = router;