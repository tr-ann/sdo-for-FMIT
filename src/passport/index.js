const passport = require('passport');
const UserService = require('../modules/users/services/UserService');
const { Unauthorized, BadRequest } = require('../classes/errors');
 
const LocalStrategy = require('./strategies/LocalStrategy');
const JwtStrategy = require('./strategies/JwtStrategy');

passport.use('local', LocalStrategy);
passport.use('jwt', JwtStrategy);

passport.serializeUser((user, cb) => {
	cb(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	done(null, await UserService.readById(id));
});

const isAuthenticated = (req, res, next) => {
  
	req.isAuthenticated()
    ? next()
    : next(new Unauthorized());
}

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

module.exports = { passport, isAuthenticated, isValidToken };