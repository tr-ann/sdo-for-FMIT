const { Router } = require('express');
const FacultyController = require('../controllers/FacultyController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(FacultyController.readById));
router.post('/:id', tryCatch(FacultyController.update));
router.delete('/:id', tryCatch(FacultyController.destroy));
router.get('/', tryCatch(FacultyController.readAll));
router.post('/', tryCatch(FacultyController.create));

module.exports = router;