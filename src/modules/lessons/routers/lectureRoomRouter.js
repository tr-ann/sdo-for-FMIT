const { Router } = require('express');
const LectureRoomController = require('../controllers/LectureRoomController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const Validate = require('../../../classes/validator');

const router = Router();

router.get(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(LectureRoomController.readById)
);

router.put(
  '/:id',
  Validate.validate({
    params: schemas.id,
    body: schemas.lessons.lectureRoom,
  }),
  tryCatch(LectureRoomController.update)
);

router.delete(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(LectureRoomController.destroy)
);

router.get('/', tryCatch(LectureRoomController.readAll));

router.post(
  '/',
  Validate.validate({ body: schemas.lessons.lectureRoom }),
  tryCatch(LectureRoomController.create)
);

module.exports = router;