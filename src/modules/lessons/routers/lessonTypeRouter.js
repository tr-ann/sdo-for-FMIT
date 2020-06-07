const { Router } = require('express');
const LessonTypeController = require('../controllers/LessonTypeController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const Validate = require('../../../classes/validator');

const router = Router();

router.get(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(LessonTypeController.readById)
);

router.put(
  '/:id',
  Validate.validate({
    params: schemas.id,
    body: schemas.lessons.lessonType,
  }),
  tryCatch(LessonTypeController.update)
);

router.delete(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(LessonTypeController.destroy)
);

router.get('/', tryCatch(LessonTypeController.readAll));

router.post(
  '/',
  Validate.validate({ body: schemas.lessons.lessonType }),
  tryCatch(LessonTypeController.create)
);

module.exports = router;