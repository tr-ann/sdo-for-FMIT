const { Router } = require('express');
const UserInfoController = require('../controllers/UserInfoController');
const { tryCatch } = require('../../../helpers');

const router = Router()

router.get('/:id', tryCatch(UserInfoController.readById));
router.post('/:id', tryCatch(UserInfoController.update));
router.delete('/:id', tryCatch(UserInfoController.destroy));
router.get('/', tryCatch(UserInfoController.readAll));
router.post('/', tryCatch(UserInfoController.create));

module.exports = router;