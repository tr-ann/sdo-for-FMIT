const { Router } = require('express');
const RoleController = require('../controllers/RoleController');
const { tryCatch } = require('../../../helpers');
const Validator = require('../../../classes/validator');
const schemes = require('../../../schemas');

const router = Router();

router.get(
  '/:id',
  Validator.validate({ params: schemes.id }),
  tryCatch(RoleController.readById)
);

router.put(
  '/:id',
  Validator.validate({ params: schemes.id, body: schemes.users.role }),
  tryCatch(RoleController.update)
);

router.delete(
  '/:id',
  Validator.validate({ params: schemes.id }),
  tryCatch(RoleController.destroy)
);

router.get(
  '/',
  Validator.validate({ query: schemes.pagination }),
  tryCatch(RoleController.readAll)
);

router.post(
  '/',
  Validator.validate({ body: schemes.users.role }),
  tryCatch(RoleController.create)
);

module.exports = router;