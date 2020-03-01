const { Router } = require('express');
const PositionController = require('../controllers/TeacherController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(PositionController.readById));
router.post('/:id', tryCatch(PositionController.update));
router.delete('/:id', tryCatch(PositionController.destroy));
router.get('/', tryCatch(PositionController.readAll));
router.post('/', tryCatch(PositionController.create));

module.exports = router;