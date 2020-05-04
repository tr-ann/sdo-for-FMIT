const { Router } = require('express');
const RequestController = require('../controllers/RequestController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const Validate = require('../../../classes/Validator');

const router = Router();

router.get(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(RequestController.readById)
);

router.put(
  '/:id',
  Validate.validate({
    params: schemas.id,
    body: schemas.papers.request,
  }),
  tryCatch(RequestController.update)
);

router.delete(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(RequestController.destroy)
);

router.get('/', tryCatch(RequestController.readAll));

router.post(
  '/',
  Validate.validate({ body: schemas.papers.request }),
  tryCatch(RequestController.create)
);

module.exports = router;