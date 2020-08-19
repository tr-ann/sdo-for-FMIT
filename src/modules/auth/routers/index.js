const signUpRouter = require('./SignUpRouter');
const signInRouter = require('./SignInRouter');


module.exports = (app) => {
  app.use(signUpRouter);
  app.use(signInRouter);
}