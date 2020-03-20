const { Router } = require('express');
const LessonNumberController = require('../controllers/LessonNumberController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;

const router = Router();

router.get(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(LessonNumberController.readById)
);

router.post(
  '/:id',
  validate({
    params: schemas.id,
    body: schemas.lessons.lessonNumber,
  }),
  tryCatch(LessonNumberController.update)
);

router.delete(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(LessonNumberController.destroy)
);

router.get('/', tryCatch(LessonNumberController.readAll));

router.post(
  '/',
  validate({ body: schemas.lessons.lessonNumber }),
  tryCatch(LessonNumberController.create)
);

module.exports = router;