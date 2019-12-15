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
        await PhoneService.create({
            user_id: user.id,
            phone: req.body.phone
        })
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

      await user.addRole(1)

      res.redirect('/users')

    } catch (error) {

        next(error)
    }
  }

    async readAll(req, res, next) {
        try {
            let users = await UserService.readAll()
            
            return res.render('usersList', {users, currentUser: req.user})
        } catch(error) {
            next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let user = await UserService.readById(req.params.id)

            res.render('userInfo', { user: user, currentUser: req.user })
        } catch (error) {
            next(error)
        }
    }
    
    async update(req, res, next) {
        try {

            let user = await UserService.readById(req.params.id)

            let phones = await user.getPhones()

            for (let phone of phones) {
                phone.destroy()
            }

            await PhoneService.create({
                user_id: user.id,
                phone: req.body.phone
            })

            await UserInfoService.update(user.id, {
                lastName: req.body.lastName,
                firstName: req.body.firstName,
                middleName: req.body.middleName,
                email: req.body.email,
                birthday: req.body.birthday,
                sex: req.body.sex,
                city: req.body.city,
                address: req.body.address
            })
            
            res.redirect(`/users/${req.params.id}`)
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