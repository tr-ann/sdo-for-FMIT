const { Router } = require('express');
const UserController = require('../controllers/UserController');
const { tryCatch } = require('../../../helpers');

const router = Router();

//router.get('/profile', tryCatch(userController.readById)); // собственный профиль
//router.put('/profile', tryCatch(UserController.update));

router.put('/me', tryCatch(UserController.restorePassword))

router.get('/:id', tryCatch(UserController.readById));
router.delete('/:id', tryCatch(UserController.destroy));
router.get('/', tryCatch(UserController.readAll));
router.post('/', tryCatch(UserController.create));

module.exports = router;