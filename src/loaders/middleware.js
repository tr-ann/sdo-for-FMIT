const NotFoundError = require('../middleware/notFound');
const ErrorHandler = require('../middleware/errorHandler');

module.exports = (app) => {
  app
    .use(NotFoundError)
    .use(ErrorHandler);
};