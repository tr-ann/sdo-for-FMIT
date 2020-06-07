const { Router } = require('express');
const SubgroupController = require('../controllers/SubgroupController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const Validate = require('../../../classes/validator');

const router = Router();

router.get(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(SubgroupController.readById)
);

router.put(
  '/:id',
  Validate.validate({
    params: schemas.id,
    body: schemas.faculties.subgroup,
  }),
  tryCatch(SubgroupController.update)
);

router.delete(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(SubgroupController.destroy)
);

router.get('/', tryCatch(SubgroupController.readAll));

router.post(
  '/',
  Validate.validate({ body: schemas.faculties.subgroup }),
  tryCatch(SubgroupController.create)
);

module.exports = router;