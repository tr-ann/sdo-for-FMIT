const { Router } = require('express');
const PhoneController = require('../controllers/PhoneController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(PhoneController.readById));
router.post('/:id', tryCatch(PhoneController.update));
router.delete('/:id', tryCatch(PhoneController.destroy));
router.get('/', tryCatch(PhoneController.readAll));
router.post('/', tryCatch(PhoneController.create));

module.exports = router;