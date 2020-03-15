const { Router } = require('express');
const RoleController = require('../controllers/RoleController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(RoleController.readById));
router.put('/:id', tryCatch(RoleController.update));
router.delete('/:id', tryCatch(RoleController.destroy));
router.get('/', tryCatch(RoleController.readAll));
router.post('/', tryCatch(RoleController.create));

module.exports = router;