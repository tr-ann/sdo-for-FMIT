const { Router } = require('express');
const StudentController = require('../controllers/StudentController');
const { tryCatch } = require('../../../helpers');
const Validator = require('../../../classes/Validator');
const schemas = require('../../../schemas')

const router = Router();

router.get(
  '/:id',
  Validator.validate({ params: [schemas.id] }),
  tryCatch(StudentController.readById)
);

router.put(
  '/:id',
  Validator.validate({
    params: [schemas.id],
    body: [
      schemas.students.updateStudent,
      schemas.students.generalInfo,
      schemas.students.passportInfo,
      schemas.students.parentsInfo
    ]
  }),
  tryCatch(StudentController.update)
);

router.delete(
  '/:id',
  Validator.validate({ params: [schemas.id] }),
  tryCatch(StudentController.destroy)
);

router.get(
  '/',
  Validator.validate({ query: [schemas.pagination] }),
  tryCatch(StudentController.readAll)
);

router.post(
  '/',
  Validator.validate({
    body: [
      schemas.students.createStudent
    ]
  }),
  tryCatch(StudentController.create)
);


module.exports = router;