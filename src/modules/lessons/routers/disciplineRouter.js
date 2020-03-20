const { Router } = require('express');
const DisciplineController = require('../controllers/DisciplineController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;

const router = Router();

router.get(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(DisciplineController.readById)
);

router.post(
  '/:id',
  validate({
    params: schemas.id,
    body: schemas.lessons.discipline,
  }),
  tryCatch(DisciplineController.update)
);

router.delete(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(DisciplineController.destroy)
);

router.get('/', tryCatch(DisciplineController.readAll));

router.post(
  '/',
  validate({ body: schemas.lessons.discipline }),
  tryCatch(DisciplineController.create)
);

module.exports = router;