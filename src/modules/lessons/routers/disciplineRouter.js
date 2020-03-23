const { Router } = require('express');
const DisciplineController = require('../controllers/DisciplineController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const Validate = require('../../../classes/Validator');

const router = Router();

router.get(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(DisciplineController.readById)
);

router.put(
  '/:id',
  Validate.validate({
    params: schemas.id,
    body: schemas.lessons.discipline,
  }),
  tryCatch(DisciplineController.update)
);

router.delete(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(DisciplineController.destroy)
);

router.get('/', tryCatch(DisciplineController.readAll));

router.post(
  '/',
  Validate.validate({ body: schemas.lessons.discipline }),
  tryCatch(DisciplineController.create)
);

module.exports = router;