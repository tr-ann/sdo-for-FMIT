const { NotFound } = require('../../classes/errors');
const { responseFormat } = require('../../helpers');
const { passport } = require('../../passport');

class AuthController {

  async login(req, res, next) {
    
    let result = await (new Promise((resolve, reject) => {

      passport.authenticate('local', (err, user, info) => {

        if (err) reject(err);
        
        if (!user) reject(new NotFound(info.message));

        req.logIn(user, (err) => {

          if (err) reject(err);

          resolve(
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
      })(req, res, next);
    }));

    res
      .status(200)
      .json(result);
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