const countryRouter = require('./countryRouter')


module.exports = (app) => {
  app.use('/countries', countryRouter);
}