const { Router } = require('express');
const OrganizationController = require('../controllers/TermPaperController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const Validate = require('../../../classes/Validator');

const router = Router();

router.get(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(OrganizationController.readById)
);

router.post(
  '/:id',
  Validate.validate({
    params: schemas.id,
    body: schemas.papers.organization,
  }),
  tryCatch(OrganizationController.update)
);

router.delete(
  '/:id',
  Validate.validate({ params: schemas.id }),
  tryCatch(OrganizationController.destroy)
);

router.get('/', tryCatch(OrganizationController.readAll));

router.post(
  '/',
  Validate.validate({ body: schemas.papers.organization }),
  tryCatch(OrganizationController.create)
);

module.exports = router;