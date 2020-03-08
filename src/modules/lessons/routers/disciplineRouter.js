const { Router } = require('express');
const DisciplineController = require('../controllers/DisciplineController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(DisciplineController.readById));
router.post('/:id', tryCatch(DisciplineController.update));
router.delete('/:id', tryCatch(DisciplineController.destroy));
router.get('/', tryCatch(DisciplineController.readAll));
router.post('/', tryCatch(DisciplineController.create));

module.exports = router;