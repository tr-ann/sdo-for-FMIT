const { Router } = require('express');
const GraduationPaperController = require('../controllers/GraduationPaperController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(GraduationPaperController.readById));
router.put('/:id', tryCatch(GraduationPaperController.update));
router.delete('/:id', tryCatch(GraduationPaperController.destroy));
router.get('/', tryCatch(GraduationPaperController.readAll));
router.post('/', tryCatch(GraduationPaperController.create));

module.exports = router;