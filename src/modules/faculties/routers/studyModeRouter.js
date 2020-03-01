const { Router } = require('express');
const StudyModeController = require('../controllers/StudyModeController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(StudyModeController.readById));
router.post('/:id', tryCatch(StudyModeController.update));
router.delete('/:id', tryCatch(StudyModeController.destroy));
router.get('/', tryCatch(StudyModeController.readAll));
router.post('/', tryCatch(StudyModeController.create));

module.exports = router;