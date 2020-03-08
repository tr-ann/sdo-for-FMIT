const { Router } = require('express');
const OrganizationController = require('../controllers/TermPaperController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(OrganizationController.readById));
router.post('/:id', tryCatch(OrganizationController.update));
router.delete('/:id', tryCatch(OrganizationController.destroy));
router.get('/', tryCatch(OrganizationController.readAll));
router.post('/', tryCatch(OrganizationController.create));

module.exports = router;