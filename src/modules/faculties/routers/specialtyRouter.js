const { Router } = require('express');
const SpecialtyController = require('../controllers/SpecialtyController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const Validate = require('../../../classes/Validator');

const router = Router();

router.get(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(SpecialtyController.readById)
);

router.put(
  '/:id',
  Validate.validate({
    params: schemas.id,
    body: schemas.faculties.specialty,
  }),
  tryCatch(SpecialtyController.update)
);

router.delete(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(SpecialtyController.destroy)
);

router.get('/', tryCatch(SpecialtyController.readAll));

router.post(
  '/',
  Validate.validate({ body: schemas.faculties.specialty }),
  tryCatch(SpecialtyController.create)
);

module.exports = router;