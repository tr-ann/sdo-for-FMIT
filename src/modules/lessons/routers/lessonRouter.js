const { Router } = require('express');
const LessonController = require('../controllers/LessonController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const Validate = require('../../../classes/validator');

const router = Router();

router.get(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(LessonController.readById)
);

router.put(
  '/:id',
  Validate.validate({
    params: schemas.id,
    body: schemas.lessons.lesson,
  }),
  tryCatch(LessonController.update)
);

router.delete(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(LessonController.destroy)
);

router.get('/', tryCatch(LessonController.readAll));

router.post(
  '/',
  Validate.validate({ body: schemas.lessons.lesson }),
  tryCatch(LessonController.create)
);

module.exports = router;