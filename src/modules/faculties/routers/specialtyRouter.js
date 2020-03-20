const { Router } = require('express');
const SpecialtyController = require('../controllers/SpecialtyController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;

const router = Router();

router.get(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(SpecialtyController.readById)
);

router.post(
  '/:id',
  validate({
    params: schemas.id,
    body: schemas.faculties.specialty,
  }),
  tryCatch(SpecialtyController.update)
);

router.delete(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(SpecialtyController.destroy)
);

router.get('/', tryCatch(SpecialtyController.readAll));

router.post(
  '/',
  validate({ body: schemas.faculties.specialty }),
  tryCatch(SpecialtyController.create)
);

module.exports = router;