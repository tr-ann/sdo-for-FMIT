const initExpress = require('./express');
const initMiddleware = require('./middleware');
const initRoutes = require('./routes');
const initSessions = require('./sessions');
const initSwagger = require('./swagger');

module.exports = (app) => {
  initExpress(app);
  initSwagger(app);
  initSessions(app);
  initRoutes(app);
  initMiddleware(app);
};