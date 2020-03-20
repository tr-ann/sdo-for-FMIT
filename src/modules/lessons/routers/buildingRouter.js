const { Router } = require('express');
const BuildingController = require('../controllers/BuildingController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const Validate = require('../../../classes/Validator');

const router = Router();

router.get(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(BuildingController.readById)
);

router.post(
  '/:id',
  Validate.validate({
    params: schemas.id,
    body: schemas.lessons.building,
  }),
  tryCatch(BuildingController.update)
);

router.delete(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(BuildingController.destroy)
);

router.get('/', tryCatch(BuildingController.readAll));

router.post(
  '/',
  Validate.validate({ body: schemas.lessons.building }),
  tryCatch(BuildingController.create)
);

module.exports = router;