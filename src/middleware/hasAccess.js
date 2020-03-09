const UserService = require('../modules/users/services/UserService');
const { BadRequest } = require('../classes/errors');

const hasAccess = async (req, res, next) => {

  let user = await UserService.readById(req.user.id);
  let roles = await user.getRoles();
  
  for (let role of roles) {
    
    let controlPoints = await role.getControlPoints();

    for (let controlPoint of controlPoints) {

      if (RegExp(controlPoint.url).test(req.originalControlPoint) && req.method == controlPoint.method) {
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
    next(new BadRequest("Access denied"));
  }
};
