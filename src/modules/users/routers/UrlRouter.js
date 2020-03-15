const { Router } = require('express');
const ControlPointController = require('../controllers/ControlPointController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(ControlPointController.readById));
router.post('/:id', tryCatch(ControlPointController.update));
router.delete('/:id', tryCatch(ControlPointController.destroy));
router.get('/', tryCatch(ControlPointController.readAll));
router.post('/', tryCatch(ControlPointController.create));

module.exports = router;