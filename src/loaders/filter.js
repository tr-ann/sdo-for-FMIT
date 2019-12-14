import ControlPointService from '../modules/users/services/ControlPointService'
import UserService from '../modules/users/services/UserService'
import BadRequest from '../classes/errors/4xx/badRequest'

export default async function(req, res, next) {

    let user = await UserService.readById(req.user.id);

    let roles = await user.getRoles();
    
    for (let role of roles) {
        let controlPoints = await role.getControlPoints()

        for (let controlPoint of controlPoints) {

            if (RegExp(controlPoint.url).test(req.originalUrl) && req.method == controlPoint.method) {
                next();
            }
        }
    }

    next(new BadRequest("Access denied"));
}

/*
Promise.all(

        ControlPointService.get({
            where: {
                url: req.originalUrl,
                method: req.method,
            }
        })
        .then(controlPoint =>{
            if (!controlPoint) {
                next(new NotFound('Incorrect request URL'))
            }
            return controlPoint.getRoles()
        }),

        UserService.readById(req.user.id)
        .then(user => {
            return user.getRoles()
        })
    )
    .then(results => {
        let accessRoles = results[0];
        let roles = results[1];

        for (let role of roles) {
            if (accessRoles.find(role)) next();
        }

        throw new BadRequest("Access denied");
    })
    .catch(err => {
        next(err)
    })
*/