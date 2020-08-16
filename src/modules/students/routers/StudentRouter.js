const { Router } = require('express');
const StudentController = require('../controllers/StudentController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(StudentController.readById));
router.post('/:id', tryCatch(StudentController.update));
router.delete('/:id', tryCatch(StudentController.destroy));

router.get('/', tryCatch(StudentController.readAll));
router.post('/', tryCatch(StudentController.create));

module.exports = router;