const { Router } = require('express');
const ControlPointController = require('../controllers/ControlPointController');
const { tryCatch } = require('../../../helpers');
const Validator = require('../../../classes/Validator');
const schemes = require('../../../schemas');

const router = Router();

router.get(
  '/:id',
  Validator.validate({ params: schemes.id }),
  tryCatch(ControlPointController.readById)
);

router.post(
  '/:id',
  Validator.validate({ params: schemes.id, body: schemes.users.controlPoint }),
  tryCatch(ControlPointController.update)
);

router.delete(
  '/:id',
  Validator.validate({ params: schemes.id }),
  tryCatch(ControlPointController.destroy)
);

router.get(
  '/',
  Validator.validate({ query: schemes.pagination }),
  tryCatch(ControlPointController.readAll)
);

router.post(
  '/',
  Validator.validate({ body: schemes.users.controlPoint }),
  tryCatch(ControlPointController.create)
);

module.exports = router;