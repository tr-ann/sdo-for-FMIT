const { Router } = require('express');
const StudyModeController = require('../controllers/StudyModeController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const Validate = require('../../../classes/Validator');

const router = Router();

router.get(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(StudyModeController.readById)
);

router.post(
  '/:id',
  Validate.validate({
    params: schemas.id,
    body: schemas.faculties.studyMode,
  }),
  tryCatch(StudyModeController.update)
);

router.delete(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(StudyModeController.destroy)
);

router.get('/', tryCatch(StudyModeController.readAll));

router.post(
  '/',
  Validate.validate({ body: schemas.faculties.studyMode }),
  tryCatch(StudyModeController.create)
);

module.exports = router;