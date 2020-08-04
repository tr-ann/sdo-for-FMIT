const UserService = require('../users/services/UserService');
const UserInfoService = require('../users/services/UserInfoService');
const { responseFormat } = require('../../helpers');
const { sequelize } = require('../../sequelize');
const roles = require('../../constants/usersInfo');
const db = require('../../dbModels');

class SignupController {

  async signup(req, res) {
    let createdUser = await sequelize.transaction( async (transaction) => {

      let user = await UserService.create({
        login: req.body.login,
        password: req.body.password,
        confirmedPassword: req.body.confirmedPassword,
        phones: req.body.phones,
      }, {
        include: [{
          model: db.Phone,
          as: 'phones'
        }],
        transaction: transaction,
      });

      let fullName = `${req.body.lastName} ${req.body.firstName} ${req.body.middleName || ''}`;

      let userInfo = await UserInfoService.create({
        userId: user.id,
        fullName: fullName,
        email: req.body.email,
        birthday: req.body.birthday,
        sex: req.body.sex,
      }, {
        transaction: transaction
      });
  
      await user.setUserInfo(userInfo, { transaction: transaction	});

      await user.setRoles(roles.DEFAULT_ROLE_ID, { transaction: transaction	});

      return user;
    });

    res
      .status(201)
      .json(
        responseFormat.build(
          { id: createdUser.id },
          "User created successfully", 
          201, 
          "success"
        )
      );
  }

}

module.exports = new SignupController();
