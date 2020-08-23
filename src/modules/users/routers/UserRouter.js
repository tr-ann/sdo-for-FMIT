const { Router } = require('express');
const UserController = require('../controllers/UserController');
const { tryCatch } = require('../../../helpers');
const Validator = require('../../../classes/validator');
const schemas = require('../../../schemas');

const router = Router();

router.put(
  '/:id/password',
  Validator.validate({ body: schemas.users.updatePassword }),
  tryCatch(UserController.updatePassword)
);

router.put(
  '/:id',
  Validator.validate({ 
    body: [
      schemas.users.userInfo,
      schemas.users.phone
    ],
    params: [ schemas.id ]
  }),
  tryCatch(UserController.update)
);

router.get(
  '/:id',
  Validator.validate({ params: schemas.id }),
  tryCatch(UserController.readById)
);

router.delete(
  '/:id',
  Validator.validate({ params: schemas.id }),
  tryCatch(UserController.destroy)
);

router.get(
  '/',
  Validator.validate({ query: schemas.pagination }),
  tryCatch(UserController.readAll)
);

router.post(
  '/',
  Validator.validate({ body: [schemas.users.createUser] }),
  tryCatch(UserController.create)
);

module.exports = router;