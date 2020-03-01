const { Router } = require('express');
const GroupController = require('../controllers/GroupController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(GroupController.readById));
router.post('/:id', tryCatch(GroupController.update));
router.delete('/:id', tryCatch(GroupController.destroy));
router.get('/', tryCatch(GroupController.readAll));
router.post('/', tryCatch(GroupController.create));

module.exports = router;