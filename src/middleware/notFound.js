const { NotFound } = require('../classes').errors;

module.exports = (req, res, next) => {
  next(new NotFound('Router not found, incorrect request URL'));
};
