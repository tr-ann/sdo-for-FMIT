const { Router } = require('express');
const TermPaperController = require('../controllers/TermPaperController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(TermPaperController.readById));
router.post('/:id', tryCatch(TermPaperController.update));
router.delete('/:id', tryCatch(TermPaperController.destroy));
router.get('/', tryCatch(TermPaperController.readAll));
router.post('/', tryCatch(TermPaperController.create));

module.exports = router;