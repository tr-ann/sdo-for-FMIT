const passport = require('passport');
const UserService = require('../modules/users/services/UserService');
const { Unauthorized } = require('../classes/errors');
 
const LocalStrategy = require('./strategies/LocalStrategy');

passport.use('local', LocalStrategy);

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

module.exports = { passport, isAuthenticated };