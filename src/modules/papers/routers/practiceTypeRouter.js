const { Router } = require('express');
const PracticeTypeController = require('../controllers/PracticeTypeController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const Validate = require('../../../classes/Validator');

const router = Router();

router.get(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(PracticeTypeController.readById)
);

router.post(
  '/:id',
  Validate.validate({
    params: schemas.id,
    body: schemas.papers.practioceType,
  }),
  tryCatch(PracticeTypeController.update)
);

router.delete(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(PracticeTypeController.destroy)
);

router.get('/', tryCatch(PracticeTypeController.readAll));

router.post(
  '/',
  Validate.validate({ body: schemas.papers.practioceType }),
  tryCatch(PracticeTypeController.create)
);

module.exports = router;