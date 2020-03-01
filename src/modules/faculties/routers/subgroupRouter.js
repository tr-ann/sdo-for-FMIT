const { Router } = require('express');
const SubgroupController = require('../controllers/SubgroupController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(SubgroupController.readById));
router.post('/:id', tryCatch(SubgroupController.update));
router.delete('/:id', tryCatch(SubgroupController.destroy));
router.get('/', tryCatch(SubgroupController.readAll));
router.post('/', tryCatch(SubgroupController.create));

module.exports = router;