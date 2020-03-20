const { Router } = require('express');
const PracticeTypeController = require('../controllers/PracticeTypeController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;

const router = Router();

router.get(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(PracticeTypeController.readById)
);

router.post(
  '/:id',
  validate({
    params: schemas.id,
    body: schemas.papers.practioceType,
  }),
  tryCatch(PracticeTypeController.update)
);

router.delete(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(PracticeTypeController.destroy)
);

router.get('/', tryCatch(PracticeTypeController.readAll));

router.post(
  '/',
  validate({ body: schemas.papers.practioceType }),
  tryCatch(PracticeTypeController.create)
);

module.exports = router;