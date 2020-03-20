const { Router } = require('express');
const StudyModeController = require('../controllers/StudyModeController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;

const router = Router();

router.get(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(StudyModeController.readById)
);

router.post(
  '/:id',
  validate({
    params: schemas.id,
    body: schemas.faculties.studyMode,
  }),
  tryCatch(StudyModeController.update)
);

router.delete(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(StudyModeController.destroy)
);

router.get('/', tryCatch(StudyModeController.readAll));

router.post(
  '/',
  validate({ body: schemas.faculties.studyMode }),
  tryCatch(StudyModeController.create)
);

module.exports = router;