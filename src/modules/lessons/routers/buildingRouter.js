const { Router } = require('express');
const BuildingController = require('../controllers/BuildingController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;

const router = Router();

router.get(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(BuildingController.readById)
);

router.post(
  '/:id',
  validate({
    params: schemas.id,
    body: schemas.lessons.building,
  }),
  tryCatch(BuildingController.update)
);

router.delete(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(BuildingController.destroy)
);

router.get('/', tryCatch(BuildingController.readAll));

router.post(
  '/',
  validate({ body: schemas.lessons.building }),
  tryCatch(BuildingController.create)
);

module.exports = router;