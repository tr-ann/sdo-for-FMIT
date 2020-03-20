const { Router } = require('express');
const RoomTypeController = require('../controllers/RoomTypeController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const Validate = require('../../../classes/Validator');

const router = Router();

router.get(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(RoomTypeController.readById)
);

router.post(
  '/:id',
  Validate.validate({
    params: schemas.id,
    body: schemas.lessons.roomType,
  }),
  tryCatch(RoomTypeController.update)
);

router.delete(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(RoomTypeController.destroy)
);

router.get('/', tryCatch(RoomTypeController.readAll));

router.post(
  '/',
  Validate.validate({ body: schemas.lessons.roomType }),
  tryCatch(RoomTypeController.create)
);

module.exports = router;