const { Router } = require('express');
const DepartmentController = require('../controllers/DepartmentController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(DepartmentController.readById));
router.post('/:id', tryCatch(DepartmentController.update));
router.delete('/:id', tryCatch(DepartmentController.destroy));
router.get('/', tryCatch(DepartmentController.readAll));
router.post('/', tryCatch(DepartmentController.create));

module.exports = router;