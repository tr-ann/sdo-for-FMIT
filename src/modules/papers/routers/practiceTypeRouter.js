const { Router } = require('express');
const PracticeTypeController = require('../controllers/PracticeTypeController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(PracticeTypeController.readById));
router.post('/:id', tryCatch(PracticeTypeController.update));
router.delete('/:id', tryCatch(PracticeTypeController.destroy));
router.get('/', tryCatch(PracticeTypeController.readAll));
router.post('/', tryCatch(PracticeTypeController.create));

module.exports = router;