const UserRepository = require('../repositories/UserRepository');
const { NotFound, BadRequest } = require('../../../classes/errors');
const { sequelize } = require('../../../sequelize');
const Hash = require('../../../classes/Hash');
const db = require('../../../dbModels');

class UserService {

  async create(user, options) {

    let existingUser = await UserRepository.get({where: { login: user.login }})
    
    if(existingUser[0]) {
      throw new BadRequest("Such login is already in use");
    }

    if(!this._isConfirmedPass(user.password, user.confirmedPassword)) {
      throw new BadRequest("Password is not confirmed");
    }

    let newUser = await UserRepository.create(user, options);

    return newUser;
  }

  async readAll(pagination = { limit: process.env.limit, offset: 0 }) {

    return await UserRepository.readAll(pagination);
  }

  async readById(id) {

      let user = await UserRepository.readById(id);

      if (!user) {
        throw new NotFound('User not found');
      }
      
      return user;
  }

  async update(id, user) {

      let oldUser = await UserRepository.readById(id);

      if (!oldUser) {
        throw new NotFound('User not found');
      }

      return await oldUser.update(user);
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

      let phones = await user.getPhones();

      for (let phone of phones) {
        phone.destroy({ transaction: transaction });
      }
      
      let userInfo = await user.getUserInfo();
      await userInfo.destroy({ transaction: transaction });
      
      return await user.destroy({ transaction: transaction });
    });
    
  }

  async get(options) {        
    return await UserRepository.get(options);
  }

  async _isConfirmedPass(password, confirmedPassword) {
    return password === confirmedPassword;
  }
}

module.exports = new UserService();