const { Router } = require('express');
const OrganizationController = require('../controllers/TermPaperController');
const { tryCatch } = require('../../../helpers');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;

const router = Router();

router.get(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(OrganizationController.readById)
);

router.post(
  '/:id',
  validate({
    params: schemas.id,
    body: schemas.papers.organization,
  }),
  tryCatch(OrganizationController.update)
);

router.delete(
  '/:id',
  validate({ params: schemas.id }),
  tryCatch(OrganizationController.destroy)
);

router.get('/', tryCatch(OrganizationController.readAll));

router.post(
  '/',
  validate({ body: schemas.papers.organization }),
  tryCatch(OrganizationController.create)
);

module.exports = router;