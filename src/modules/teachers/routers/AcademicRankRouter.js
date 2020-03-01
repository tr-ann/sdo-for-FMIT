const { Router } = require('express');
const AcademicRankController = require('../controllers/TeacherController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(AcademicRankController.readById));
router.post('/:id', tryCatch(AcademicRankController.update));
router.delete('/:id', tryCatch(AcademicRankController.destroy));
router.get('/', tryCatch(AcademicRankController.readAll));
router.post('/', tryCatch(AcademicRankController.create));

module.exports = router;