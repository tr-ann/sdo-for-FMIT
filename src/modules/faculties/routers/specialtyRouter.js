const { Router } = require('express');
const SpecialtyController = require('../controllers/SpecialtyController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(SpecialtyController.readById));
router.post('/:id', tryCatch(SpecialtyController.update));
router.delete('/:id', tryCatch(SpecialtyController.destroy));
router.get('/', tryCatch(SpecialtyController.readAll));
router.post('/', tryCatch(SpecialtyController.create));

module.exports = router;