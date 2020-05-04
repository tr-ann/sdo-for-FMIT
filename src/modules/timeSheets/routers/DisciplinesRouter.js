const { Router } = require('express');
const DisciplineController = require('../controllers/DisciplineController');
const { tryCatch } = require('../../../helpers');
const Validator = require('../../../classes/Validator');
const schemes = require('../../../schemas');

const router = Router();

router.get(
  '/:id',
  Validator.validate({ params: schemes.id }),
  tryCatch(DisciplineController.readById)
);

router.put(
  '/:id',
  Validator.validate({ params: schemes.id, body: schemes.timeSheets.discipline }),
  tryCatch(DisciplineController.update)
);

router.delete(
  '/:id',
  Validator.validate({ params: schemes.id }),
  tryCatch(DisciplineController.destroy)
);

router.get(
  '/',
  //Validator.validate({ query: schemes.pagination }),
  tryCatch(DisciplineController.readAll)
);

router.post(
  '/',
  Validator.validate({ body: schemes.timeSheets.discipline }),
  tryCatch(DisciplineController.create)
);

module.exports = router;