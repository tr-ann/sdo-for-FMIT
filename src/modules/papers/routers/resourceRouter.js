const { Router } = require('express');
const ResourceController = require('../controllers/ResourceController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(ResourceController.readById));
router.post('/:id', tryCatch(ResourceController.update));
router.delete('/:id', tryCatch(ResourceController.destroy));
router.get('/', tryCatch(ResourceController.readAll));
router.post('/', tryCatch(ResourceController.create));

module.exports = router;