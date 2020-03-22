const UserService = require('../modules/users/services/UserService');
const { Forbidden } = require('../classes/errors');

const hasAccess = async (req, res, next) => {

  let user = await UserService.readById(req.user.id);
  let roles = await user.getRoles();
  
  console.log(req.method)

  for (let role of roles) {

    /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
    
    let controlPoints = await role.getControlPoints();

    for (let controlPoint of controlPoints) {
      if (RegExp(controlPoint.url).test(req.originalUrl) && req.method.localeCompare(controlPoint.method) == 0) {
        return true;
      }
    }
  }

  return false;  
}

module.exports = async (req, res, next) => {
  if (await hasAccess(req, res, next)) {
    next();
  }
  else {
    next(new Forbidden("Access denied"));
  }
};
