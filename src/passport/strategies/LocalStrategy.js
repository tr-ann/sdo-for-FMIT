const LocalStrategy = require('passport-local').Strategy;
const UserRepository = require('../../modules/users/repositories/UserRepository');

module.exports = new LocalStrategy(
  {
    usernameField: 'login',
    passwordField: 'password',
  },
  async (login, password, done) => {
    
    const user = (await UserRepository.get({ 
      where: { login },
      attributes: [ 'id', 'login', 'password' ],
    }))[0];
    
    if (!user) {
      return done(null, false, { message: 'Incorrect login or password' });
    }

    if (await user.validPassword(password)) {
      return done(null, user, { message: 'User authenticated successfully' });
    }

    return done(null, false, { message: 'Incorrect login or password' });
  }
);