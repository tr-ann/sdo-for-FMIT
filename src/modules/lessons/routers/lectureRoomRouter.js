const { Router } = require('express');
const LectureRoomController = require('../controllers/LectureRoomController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;

const router = Router();

router.get(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(LectureRoomController.readById)
);

router.post(
  '/:id',
  validate({
    params: schemas.id,
    body: schemas.lessons.lectureRoom,
  }),
  tryCatch(LectureRoomController.update)
);

router.delete(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(LectureRoomController.destroy)
);

router.get('/', tryCatch(LectureRoomController.readAll));

router.post(
  '/',
  validate({ body: schemas.lessons.lectureRoom }),
  tryCatch(LectureRoomController.create)
);

module.exports = router;