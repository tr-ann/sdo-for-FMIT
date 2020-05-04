const { Router } = require('express');
const TimeSheetController = require('../controllers/TimeSheetController');
const { tryCatch } = require('../../../helpers');
const Validator = require('../../../classes/Validator');
const schemes = require('../../../schemas');

const router = Router();

router.get(
  '/:id',
  Validator.validate({ params: schemes.id }),
  tryCatch(TimeSheetController.readById)
);

router.put(
  '/:id',
  Validator.validate({ params: schemes.id, body: schemes.timeSheets.timeSheet }),
  tryCatch(TimeSheetController.update)
);

router.delete(
  '/:id',
  Validator.validate({ params: schemes.id }),
  tryCatch(TimeSheetController.destroy)
);

router.get(
  '/',
  //Validator.validate({ query: schemes.pagination }),
  tryCatch(TimeSheetController.readAll)
);

router.post(
  '/',
  Validator.validate({ body: schemes.timeSheets.timeSheet }),
  tryCatch(TimeSheetController.create)
);

module.exports = router;