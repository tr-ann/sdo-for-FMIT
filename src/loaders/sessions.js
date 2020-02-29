const { passport } = require('../passport');
const session = require('express-session');

module.exports = (app) => {
  app
    .use(session({ 
      secret: 'SECRET',
      resave: true,
      saveUninitialized: false, 
    }))
    .use(passport.initialize())
    .use(passport.session());
};