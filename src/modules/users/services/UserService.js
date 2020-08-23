const UserRepository = require('../repositories/UserRepository');
const { NotFound, BadRequest } = require('../../../classes/errors');
const { sequelize } = require('../../../sequelize');
const PhoneService = require('./PhoneService');
const db = require('../models');
const UserInfoService = require('./UserInfoService');

class UserService {

  async create(user, options) {
    let existingUser = await UserRepository.get({ attributes: ['login'], where: { login: user.login }})
    
    if(existingUser[0]) {
      throw new BadRequest("Such login is already used");
    }

    let newUser = await UserRepository.create(user, options);

    return newUser;
  }

  async readAll(pagination = { limit: 30, offset: 0 }) {
    return await UserRepository.readAll(pagination);
  }

  async readById(id) {
    let user = await UserRepository.readById(id);

    if (!user) {
      throw new NotFound('User not found');
    }
    
    return user;
  }

  async update(id, data, options) {

    let user = await this.readById(id);

    await sequelize.transaction( async (transaction) => {
		
      await PhoneService.addToUser(user, data.phones, { transaction: transaction });
      
      await UserInfoService.update(user.id, {
        fullName: data.fullName,
				email: data.email,
				birthday: data.birthday,
				sex: data.sex,
				description: data.description,
				city: data.city,
				address: data.address
      }, {
        transaction: transaction
      });

			return;
		});

    return;
  }

  async changePassword(userId, oldPassword, newPassword) {
    let user = await UserRepository.readById(userId);

    if (!user) {
      throw new NotFound('User not found');
    }
    if (!user.validPassword(oldPassword)) {
      throw new BadRequest('Password is not confirmed');
    }
    
    user.update({ password: newPassword });

    return true;
  }

  async destroy(id) {
    let user = await UserRepository.readById(id);
    
    if (!user) {
      throw new NotFound('User not found');
    }

    return await sequelize.transaction( async (transaction) => {

      await PhoneService.destroyUserPhones(id, { transaction: transaction });
      
      let userInfo = await user.getUserInfo();
      await userInfo.destroy({ transaction: transaction });
      
      return await user.destroy({ transaction: transaction });
    });
    
  }

  async get(options) {        
    return await UserRepository.get(options);
  }

}

module.exports = new UserService();