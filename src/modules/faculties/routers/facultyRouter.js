const { Router } = require('express');
const FacultyController = require('../controllers/FacultyController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const Validate = require('../../../classes/Validator');

const router = Router();

router.get(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(FacultyController.readById)
);

router.post(
  '/:id',
  Validate.validate({
    params: schemas.id,
    body: [ schemas.faculties.faculty, schemas.faculties.infoFaculty ],
  }),
  tryCatch(FacultyController.update)
);

router.delete(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(FacultyController.destroy)
);

router.get('/', tryCatch(FacultyController.readAll));

router.post(
  '/',
  Validate.validate({
    body: [ schemas.faculties.faculty, schemas.faculties.infoFaculty ]
  }),
  tryCatch(FacultyController.create)
);

module.exports = router;