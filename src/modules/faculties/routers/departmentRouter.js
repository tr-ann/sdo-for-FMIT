const { Router } = require('express');
const DepartmentController = require('../controllers/DepartmentController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;

const router = Router();

router.get(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(DepartmentController.readById)
);

router.post(
  '/:id',
  validate({
    params: schemas.id,
    body: schemas.faculties.department,
  }),
  tryCatch(DepartmentController.update)
);

router.delete(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(DepartmentController.destroy)
);

router.get('/', tryCatch(DepartmentController.readAll));

router.post(
  '/',
  validate({ body: schemas.faculties.department }),
  tryCatch(DepartmentController.create)
);

module.exports = router;