const { Router } = require('express');
const StaffController = require('../controllers/StaffController');
const { tryCatch } = require('../../../helpers');
const Validator = require('../../../classes/Validator');
const schemes = require('../../../schemas');

const router = Router();

router.get(
  '/:id',
  Validator.validate({ params: schemes.id }),
  tryCatch(StaffController.readById)
);

router.put(
  '/:id',
  Validator.validate({ params: schemes.id, body: schemes.timeSheets.staff }),
  tryCatch(StaffController.update)
);

router.delete(
  '/:id',
  Validator.validate({ params: schemes.id }),
  tryCatch(StaffController.destroy)
);

router.get(
  '/',
  //Validator.validate({ query: schemes.pagination }),
  tryCatch(StaffController.readAll)
);

router.post(
  '/',
  Validator.validate({ body: schemes.timeSheets.staff }),
  tryCatch(StaffController.create)
);

module.exports = router;