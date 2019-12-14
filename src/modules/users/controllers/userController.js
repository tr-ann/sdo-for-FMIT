import UserService from '../services/UserService'
import UserInfoService from '../services/UserInfoService'
import PhoneService from '../services/PhoneService'
import helpers from '../../../helpers'
import UserRoleService from '../services/UserRoleService'

class UserController {

  async create(req, res, next) {
    try {
      let user = await UserService.create({
        login: req.body.login,
        password: req.body.password,
      })

      if (req.body.phone) {
        await user.addPhone({ phone: req.body.phone })
      }

      await UserInfoService.create({
        userId: user.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        middleName: req.body.middleName,
        email: req.body.email,
        birthday: req.body.birthday,
        sex: req.body.sex,
      })

      await UserRoleService.create({ user_id: user.id })

      res.redirect('/faculties');

    } catch (error) {

        next(error)
    }
  }

    async readAll(req, res, next) {
        try {
            let users = await UserService.readAll()

            return res.render('usersList', {users, currentUser: req.user})
            /*.status(200)
                .json(
                    helpers.ResponseFormat.build(
                        users,
                        "Users read successfully",
                        200,
                        "success"
                    )
                )*/
        } catch(error) {
            next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let user = await UserService.readById(req.params.id)

            res.render('userInfo', {user: user})

            /*return res.status(200)
                .json(
                    helpers.ResponseFormat.build(
                        user,
                        "User read successfully",
                        200,
                        "success"
                    )
                )*/
        } catch (error) {
            next(error)
        }
    }
    
    async update(req, res, next) {
        try {

            let user = await UserService.readById(req.params.id)

            await PhoneService.update({
                user_id: user.id, 
                phone: req.body.phone
            })

            let fullName = req.body.first_name 
                    + ' ' + req.body.last_name 
                    + ' ' + (req.body.middle_name || '')

            let usI = UserInfoService.get({where: {user_id: user.id}})

            await UserInfoService.update(usI.id, {
                user_id:   user.id,
                full_name: fullName,
                email: req.body.email,
                birthday: req.body.birthday,
                sex: req.body.sex,
            })

            res.render(`/users/${req.params.id}`)
            /*return res.status(200)
                .json(
                    helpers.ResponseFormat.build(
                        user,
                        "User updated successfully",
                        200,
                        "success"
                    )
                )*/
        } catch(error) {
            next(error)
        }
    }
    
    async destroy(req, res, next) {
        try {
            await UserService.destroy(req.params.id)
            return res.status(200)
                .json(
                    helpers.ResponseFormat.build(
                        {},
                        "User deleted successfully",
                        200,
                        "success"
                    )
                )
        } catch (error) { 
            next(error)
        }
    }
}

export default new UserController()