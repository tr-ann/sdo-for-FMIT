const { Router } = require('express');
const LessonController = require('../controllers/LessonController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;

const router = Router();

router.get(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(LessonController.readById)
);

router.post(
  '/:id',
  validate({
    params: schemas.id,
    body: schemas.lessons.lesson,
  }),
  tryCatch(LessonController.update)
);

router.delete(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(LessonController.destroy)
);

router.get('/', tryCatch(LessonController.readAll));

router.post(
  '/',
  validate({ body: schemas.lessons.lesson }),
  tryCatch(LessonController.create)
);

module.exports = router;