const {Router} = require('express');
const SignUpController = require('../controllers/SignUpController');
const {tryCatch} = require('../../../helpers');
const Validator = require('../../../classes/validator');
const schemes = require('../../../schemas');

const router = Router();

router.post(
  '/signup',
  Validator.validate({
      body: [
        schemes.users.user,
        schemes.auth.signUpUserInfo,
        schemes.users.phone,
      ],
      options: {abortEarly: false},
    },
  ),
  tryCatch(SignUpController.signup)
);

module.exports = router;
