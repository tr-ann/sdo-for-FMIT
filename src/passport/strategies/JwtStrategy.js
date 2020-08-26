const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const UserRepository = require('../../modules/users/repositories/UserRepository');

const opts = {};
opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.ACCESS_TOKEN_SECRET;

module.exports = new jwtStrategy(opts,
  async (jwt_payload, done) => {
    try {

      let user = (await UserRepository.get({ 
        where: { id: jwt_payload.id },
        attributes: [ 'id', 'login', 'password' ],
      }))[0];

      if (user) {
        return done(null, user);
      }
      else {
        return done(null, false);
      }
    }
    catch (err) {
      return done(err, false);
    }
  }
);