const { Router } = require('express');
const RoomTypeController = require('../controllers/RoomTypeController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;

const router = Router();

router.get(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(RoomTypeController.readById)
);

router.post(
  '/:id',
  validate({
    params: schemas.id,
    body: schemas.lessons.roomType,
  }),
  tryCatch(RoomTypeController.update)
);

router.delete(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(RoomTypeController.destroy)
);

router.get('/', tryCatch(RoomTypeController.readAll));

router.post(
  '/',
  validate({ body: schemas.lessons.roomType }),
  tryCatch(RoomTypeController.create)
);

module.exports = router;