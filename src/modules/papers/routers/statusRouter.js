const { Router } = require('express');
const StatusController = require('../controllers/StatusController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;

const router = Router();

router.get(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(StatusController.readById)
);

router.post(
  '/:id',
  validate({
    params: schemas.id,
    body: schemas.papers.status,
  }),
  tryCatch(StatusController.update)
);

router.delete(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(StatusController.destroy)
);

router.get('/', tryCatch(StatusController.readAll));

router.post(
  '/',
  validate({ body: schemas.papers.status }),
  tryCatch(StatusController.create)
);

module.exports = router;