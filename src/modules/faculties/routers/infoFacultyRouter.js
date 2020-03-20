const { Router } = require('express');
const InfoFacultyController = require('../controllers/InfoFacultyController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;

/* НУЖНЕН ЛИ ОТДЕЛЬНЫЙ КОНТРОЛЛЕР ДЛЯ INFO_FACULTY??? */

const router = Router();

router.get('/:id', tryCatch(InfoFacultyController.readById));
router.post('/:id', tryCatch(InfoFacultyController.update));
router.delete('/:id', tryCatch(InfoFacultyController.destroy));
router.get('/', tryCatch(InfoFacultyController.readAll));
router.post('/', tryCatch(InfoFacultyController.create));

module.exports = router;