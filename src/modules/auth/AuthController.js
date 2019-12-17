import { passport } from '../../loaders/passport'
import UserService from '../users/services/UserService'
import UserInfoService from '../users/services/UserInfoService'
import UserRepository from '../users/repositories/UserRepository'
import PhoneService from '../users/services/PhoneService'

class AuthController {

  login(req, res, next) {
    passport.authenticate('local',
      function(err, user, info) {
        if (err) 
          next(err)
        
        if (!user)
          res.redirect('/login?message=Incorrect login or password')

        req.logIn(user, function(err) {
          if (err) 
            next(err)

          delete user.dataValues.password
          delete user._previousDataValues.password

          res.redirect('/faculties')
        })
      }
    )(req, res, next)
  }
  
  logout(req, res) {
    req.logout()
    res.redirect('/login')
  }

  async signup(req, res, next) {
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

      new AuthController().login(req, res, next)

    } catch (error) {
        next(error)
    }
  }

  async checkLogin(req, res, next) {
    let logins = await UserRepository.getAllLogins();
    
    for (let login of logins) {
      if (req.body.login == login)
        return  res.json({text:"HelloWorld"});                //такой логин существует
    }

    console.log(res.json({text:"HelloWorld"}));
  }
}

export default new AuthController()