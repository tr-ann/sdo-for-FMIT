import ControlPointService from '../modules/users/services/ControlPointService'
import UserService from '../modules/users/services/UserService'
import BadRequest from '../classes/errors/4xx/badRequest'

function decorator(func) {
  return function(req, res, next) {
    func(req, res, next)
    .then(() => {
      next()
    })
    .catch((err) => {
      next(err)
    })
  }
}

async function _filter(req, res, next) {

  let user = await UserService.readById(req.user.id);

  let roles = await user.getRoles();
  
  for (let role of roles) {
    let controlPoints = await role.getControlPoints()

    for (let controlPoint of controlPoints) {

      if (RegExp(controlPoint.url).test(req.originalUrl) && req.method == controlPoint.method) {
        return true
      }
    }
  }

  throw new BadRequest("Access denied")
}

async function _userFilter(req, res, next) {
  if (req.params.id == req.user.id) {
    return true
  }

  throw new BadRequest("Access denied")
}

const filter = decorator(_filter)
const userFilter = decorator(_userFilter)

export { filter, userFilter }