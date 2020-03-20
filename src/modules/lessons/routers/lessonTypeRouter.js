const { Router } = require('express');
const LessonTypeController = require('../controllers/LessonTypeController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;

const router = Router();

router.get(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(LessonTypeController.readById)
);

router.post(
  '/:id',
  validate({
    params: schemas.id,
    body: schemas.lessons.lessonType,
  }),
  tryCatch(LessonTypeController.update)
);

router.delete(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(LessonTypeController.destroy)
);

router.get('/', tryCatch(LessonTypeController.readAll));

router.post(
  '/',
  validate({ body: schemas.lessons.lessonType }),
  tryCatch(LessonTypeController.create)
);

module.exports = router;