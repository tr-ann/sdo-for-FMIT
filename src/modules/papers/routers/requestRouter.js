const { Router } = require('express');
const RequestController = require('../controllers/RequestController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;

const router = Router();

router.get(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(RequestController.readById)
);

router.post(
  '/:id',
  validate({
    params: schemas.id,
    body: schemas.papers.request,
  }),
  tryCatch(RequestController.update)
);

router.delete(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(RequestController.destroy)
);

router.get('/', tryCatch(RequestController.readAll));

router.post(
  '/',
  validate({ body: schemas.papers.request }),
  tryCatch(RequestController.create)
);

module.exports = router;