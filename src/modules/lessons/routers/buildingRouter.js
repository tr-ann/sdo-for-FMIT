const { Router } = require('express');
const BuildingController = require('../controllers/BuildingController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(BuildingController.readById));
router.post('/:id', tryCatch(BuildingController.update));
router.delete('/:id', tryCatch(BuildingController.destroy));
router.get('/', tryCatch(BuildingController.readAll));
router.post('/', tryCatch(BuildingController.create));

module.exports = router;