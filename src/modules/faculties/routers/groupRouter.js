const { Router } = require('express');
const GroupController = require('../controllers/GroupController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;

const router = Router();

router.get(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(GroupController.readById)
);

router.post(
  '/:id',
  validate({
    params: schemas.id,
    body: schemas.faculties.group
  }),
  tryCatch(GroupController.update)
);

router.delete(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(GroupController.destroy)
);

router.get('/', tryCatch(GroupController.readAll));

router.post(
  '/',
  validate({ body: schemas.faculties.group }),
  tryCatch(GroupController.create)
);

module.exports = router;