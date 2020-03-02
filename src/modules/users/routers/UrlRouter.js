const { Router } = require('express');
const UrlController = require('../controllers/urlController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(UrlController.readById));
router.post('/:id', tryCatch(UrlController.update));
router.delete('/:id', tryCatch(UrlController.destroy));
router.get('/', tryCatch(UrlController.readAll));
router.post('/', tryCatch(UrlController.create));

module.exports = router;