const { NotFound, BadRequest } = require('../../../classes/errors');
const { responseFormat } = require('../../../helpers');
const { passport } = require('../../../passport');
const jwtlifetime = require('../../../constants/tokensExpired');
const jwt = require('jsonwebtoken');

class AuthController {

  async login(req, res, next) {

    let result = await (new Promise((resolve, reject) => {

      passport.authenticate('local', function (err, user) {

        if (err) {
          reject(new Error(err));
        }
        if (!user) {
          reject(new NotFound("Login failed"));
        }
        else {
          let payload = {
            id: user.id,
            login: user.login
          };

          let accessToken = jwt.sign(
            payload,
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: jwtlifetime.access_expired }
          );
          let refreshToken = jwt.sign(
            payload,
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: req.body.stayLoggedIn 
              ? jwtlifetime.refresh_expired_sli
              : jwtlifetime.refresh_expired_without_sli
            }
          );
          
          resolve(
            responseFormat.build(
              {
                accessToken,
                refreshToken
              },
              'success authentication',
              200,
              "success"
            )
          );
        }
      })(req, res, next);
    }));

    res
      .status(200)
      .json(result);
  }

  refreshToken(req, res) {

    if (req.body.refreshToken){
      let payload = jwt.verify(req.body.refreshToken, process.env.REFRESH_TOKEN_SECRET);

      let accessToken = jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_SECRET,
      );
      let refreshToken = jwt.sign(
        payload,
        process.env.REFRESH_TOKEN_SECRET,
      );
      
      res
        .status(200)
        .json(
          responseFormat.build(
            {
              accessToken,
              refreshToken
            },
            'success authentication',
            200,
            "success"
        ))
    }

    throw new BadRequest('no tokens');
  }
}

module.exports = new AuthController();