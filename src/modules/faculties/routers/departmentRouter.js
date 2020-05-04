const { Router } = require('express');
const DepartmentController = require('../controllers/DepartmentController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const Validate = require('../../../classes/Validator');

const router = Router();

router.get(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(DepartmentController.readById)
);

router.put(
  '/:id',
  Validate.validate({
    params: schemas.id,
    body: schemas.faculties.department,
  }),
  tryCatch(DepartmentController.update)
);

router.delete(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(DepartmentController.destroy)
);

router.get('/', tryCatch(DepartmentController.readAll));

router.post(
  '/',
  Validate.validate({ body: schemas.faculties.department }),
  tryCatch(DepartmentController.create)
);

module.exports = router;