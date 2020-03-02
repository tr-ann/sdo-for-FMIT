const { Router } = require('express');
const TeacherController = require('../controllers/TeacherController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(TeacherController.readById));
router.post('/:id', tryCatch(TeacherController.update));
router.delete('/:id', tryCatch(TeacherController.destroy));
router.get('/', tryCatch(TeacherController.readAll));
router.post('/', tryCatch(TeacherController.create));

module.exports = router;