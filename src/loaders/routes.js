const initUsersRoutes = require('../modules/users/routers');
const initStudentsRoutes = require('../modules/students/routers');
const initFacultiesRoutes = require('../modules/faculties/routers');
const initAuthRoutes = require('../modules/auth/routers');
const initCountriesRoutes = require('../modules/countries/routers');
const { tryCatch } = require('../helpers');
const { isValidToken } = require('../passport');
const hasAccess = require('../middleware/hasAccess');

module.exports = (app) => {

  initAuthRoutes(app);
  
  //app.use(tryCatch(isValidToken));
  //app.use(tryCatch(hasAccess));

  initUsersRoutes(app);
  initStudentsRoutes(app);
  initFacultiesRoutes(app);
  initCountriesRoutes(app);

};
