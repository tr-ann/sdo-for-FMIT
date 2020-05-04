const { Router } = require('express');
const StatusController = require('../controllers/StatusController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const Validate = require('../../../classes/Validator');

const router = Router();

router.get(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(StatusController.readById)
);

router.put(
  '/:id',
  Validate.validate({
    params: schemas.id,
    body: schemas.papers.status,
  }),
  tryCatch(StatusController.update)
);

router.delete(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(StatusController.destroy)
);

router.get('/', tryCatch(StatusController.readAll));

router.post(
  '/',
  Validate.validate({ body: schemas.papers.status }),
  tryCatch(StatusController.create)
);

module.exports = router;