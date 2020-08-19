const initExpress = require('./express');
const initMiddleware = require('./middleware');
const initRoutes = require('./routes');

module.exports = (app) => {
  initExpress(app);
  initRoutes(app);
  initMiddleware(app);
};