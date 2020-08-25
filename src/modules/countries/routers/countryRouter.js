const { Router } = require('express');
const CountryController = require('../controllers/CountryController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get(
  '/',
  tryCatch(CountryController.readAll)
);

module.exports = router;