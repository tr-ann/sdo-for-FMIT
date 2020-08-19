const {Router} = require('express');
const {tryCatch} = require('../../../helpers');
const Validator = require('../../../classes/validator');
const schemes = require('../../../schemas');
const SignInController = require('../controllers/SignInController');

const router = Router();


router.post('/login',
  Validator.validate({
    body: [ schemes.auth.signInInfo ],
  }),
  tryCatch(SignInController.loginWithJWT)
);

router.post('/refresh',
  Validator.validate({
    body: [ schemes.auth.refreshToken ]
  }),
  tryCatch(SignInController.refreshToken)
);

module.exports = router;
