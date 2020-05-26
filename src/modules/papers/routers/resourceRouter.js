const { Router } = require('express');
const ResourceController = require('../controllers/ResourceController');
const { tryCatch } = require('../../../helpers');
const multer = require('../../../middleware/multer');

const router = Router();

router.get('/:id', tryCatch(ResourceController.readById));
router.put('/:id', multer.upload.single('resource'), tryCatch(ResourceController.update));
router.delete('/:id', tryCatch(ResourceController.destroy));
router.get('/', tryCatch(ResourceController.readAll));
router.post('/', multer.upload.single('resource'), tryCatch(ResourceController.create));

module.exports = router;