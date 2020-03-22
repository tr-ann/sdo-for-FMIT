const UserService = require('../modules/users/services/UserService');
const { Forbidden } = require('../classes/errors');
const methods = require('../constants/methodInfo');
const Cache = require('../classes/Cache');

const cache = new Cache( async (role) => {

  let controlPoints = await role.getControlPoints();

  return controlPoints.map( (controlPoint) => {

    return {
      url: controlPoint.url,
      permissionMask : controlPoint.RoleControlPoint.permissionMask
    }
  });
});

const hasAccess = async (req, res, next) => {

  let user = await UserService.readById(req.user.id);
  let roles = await user.getRoles();

  for (let role of roles) {
    let controlPoints = await cache.process(role);

    for (let controlPoint of controlPoints) {

      if (RegExp(controlPoint.url).test(req.originalUrl) 
        && (controlPoint.permissionMask & methods[req.method])){

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
