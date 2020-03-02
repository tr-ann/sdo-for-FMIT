const { Router } = require('express');
const AcademicDegreeController = require('../controllers/TeacherController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(AcademicDegreeController.readById));
router.post('/:id', tryCatch(AcademicDegreeController.update));
router.delete('/:id', tryCatch(AcademicDegreeController.destroy));
router.get('/', tryCatch(AcademicDegreeController.readAll));
router.post('/', tryCatch(AcademicDegreeController.create));

module.exports = router;