const passport = require('passport');
const { Unauthorized, BadRequest } = require('../classes/errors');
 
const LocalStrategy = require('./strategies/LocalStrategy');
const JwtStrategy = require('./strategies/JwtStrategy');

passport.use('local', LocalStrategy);
passport.use('jwt', JwtStrategy);


const isValidToken = (req, res, next) => {

	passport.authenticate('jwt', function (err, user) {

		if (err) {
			throw new BadRequest(err);
		}
		if (user) {
			req.user = user;
      next();
		}
		else {
			throw new Unauthorized();
    }
  })(req, res, next)
}

module.exports = { passport, isValidToken };