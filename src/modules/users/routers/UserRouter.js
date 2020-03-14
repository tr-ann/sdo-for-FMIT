const { Router } = require('express');
const userController = require('../controllers/UserController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(userController.readById));
router.put('/:id', tryCatch(userController.update));
router.delete('/:id', tryCatch(userController.destroy));
router.get('/', tryCatch(userController.readAll));
router.post('/', tryCatch(userController.create));

module.exports = router;