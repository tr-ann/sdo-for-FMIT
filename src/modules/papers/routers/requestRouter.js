const { Router } = require('express');
const RequestController = require('../controllers/RequestController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(RequestController.readById));
router.post('/:id', tryCatch(RequestController.update));
router.delete('/:id', tryCatch(RequestController.destroy));
router.get('/', tryCatch(RequestController.readAll));
router.post('/', tryCatch(RequestController.create));

module.exports = router;