const { Router } = require('express');
const PracticeController = require('../controllers/PracticeController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(PracticeController.readById));
router.post('/:id', tryCatch(PracticeController.update));
router.delete('/:id', tryCatch(PracticeController.destroy));
router.get('/', tryCatch(PracticeController.readAll));
router.post('/', tryCatch(PracticeController.create));

module.exports = router;