const { Router } = require('express');
const LessonNumberController = require('../controllers/LessonNumberController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const Validate = require('../../../classes/validator');

const router = Router();

router.get(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(LessonNumberController.readById)
);

router.put(
  '/:id',
  Validate.validate({
    params: schemas.id,
    body: schemas.lessons.lessonNumber,
  }),
  tryCatch(LessonNumberController.update)
);

router.delete(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(LessonNumberController.destroy)
);

router.get('/', tryCatch(LessonNumberController.readAll));

router.post(
  '/',
  Validate.validate({ body: schemas.lessons.lessonNumber }),
  tryCatch(LessonNumberController.create)
);

module.exports = router;