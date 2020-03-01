const { Router } = require('express');
const StatusController = require('../controllers/StatusController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(StatusController.readById));
router.post('/:id', tryCatch(StatusController.update));
router.delete('/:id', tryCatch(StatusController.destroy));
router.get('/', tryCatch(StatusController.readAll));
router.post('/', tryCatch(StatusController.create));

module.exports = router;