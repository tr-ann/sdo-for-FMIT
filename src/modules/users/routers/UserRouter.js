const { Router } = require('express');
const UserController = require('../controllers/UserController');
const { tryCatch } = require('../../../helpers');
const Validator = require('../../../classes/Validator');
const schemes = require('../../../schemas');

const router = Router();

router.put(
  '/profile/password',
  Validator.validate({ body: schemes.users.restorePassword }),
  tryCatch(UserController.restorePassword)
);

router.get('/profile', tryCatch(UserController.readById)); // собственный профиль

router.put(
  '/profile',
  /*Validator.validate({ body: [
    schemes.users.updatePassword,
    schemes.users.userInfo,
    schemes.users.phone
  ]}),*/
  tryCatch(UserController.update)
);

router.get(
  '/:id',
  Validator.validate({ params: schemes.id }),
  tryCatch(UserController.readById)
);

router.delete(
  '/:id',
  Validator.validate({ params: schemes.id }),
  tryCatch(UserController.destroy)
);

router.get(
  '/',
  Validator.validate({ query: schemes.pagination }),
  tryCatch(UserController.readAll)
);

router.post(
  '/',
  Validator.validate({ body: [
    schemes.users.user,
    schemes.users.userInfo,
    schemes.users.phone
  ]}),
  tryCatch(UserController.create)
);

module.exports = router;