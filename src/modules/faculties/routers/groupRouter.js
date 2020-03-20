const { Router } = require('express');
const GroupController = require('../controllers/GroupController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const Validate = require('../../../classes/Validator');

const router = Router();

router.get(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(GroupController.readById)
);

router.post(
  '/:id',
  Validate.validate({
    params: schemas.id,
    body: schemas.faculties.group
  }),
  tryCatch(GroupController.update)
);

router.delete(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(GroupController.destroy)
);

router.get('/', tryCatch(GroupController.readAll));

router.post(
  '/',
  Validate.validate({ body: schemas.faculties.group }),
  tryCatch(GroupController.create)
);

module.exports = router;