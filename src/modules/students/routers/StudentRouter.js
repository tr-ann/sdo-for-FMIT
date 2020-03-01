const { Router } = require('express');
const studentController = require('../controllers/StudentController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(studentController.readById));
router.post('/:id', tryCatch(studentController.update));
router.delete('/:id', tryCatch(studentController.destroy));
router.get('/', tryCatch(studentController.readAll));
router.post('/', tryCatch(studentController.create));

module.exports = router;