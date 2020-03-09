const { NotFound } = require('../../classes/errors');
const { responseFormat } = require('../../helpers');
const { passport } = require('../../passport');

class AuthController {

  login(req, res, next) {
    
    passport.authenticate('local', (err, user, info) => {

        if (err) next(err);
        
        if (!user) next(new NotFound(info.message));

        req.logIn(user, (err) => {

          if (err) next(err);

          res
            .status(200)
            .json(
              responseFormat.build(
                {
                  id: user.id,
                  login: user.login,
                },
                info.message,
                200,
                "success"
              )
            );
        });
      }
    )(req, res, next);
  }
  
  logout(req, res) {

    req.logout();

    res
      .status(200)
      .json(
        responseFormat.build(
          {},
          'User logout successfully',
          200,
          'success'
        )
      );
  }
}

module.exports = new AuthController();