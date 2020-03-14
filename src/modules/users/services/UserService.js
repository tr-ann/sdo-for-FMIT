const UserRepository = require('../repositories/UserRepository');
const { NotFound, BadRequest } = require('../../../classes/errors');

const UserInfoRepository = require('../repositories/UserInfoRepository');
const Hash = require('../../../classes/Hash');

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

      if (user.newPassword) {
        if (!this._isConfirmedPass(user.oldPassword, user.newPassword)) {
          throw new BadRequest('Password is not confirmed');
        }
      }
      
      if (user.newPassword) {
        user.password = Hash.get(user.newPassword);
      }

      return await oldUser.update(user);
  }

  async destroy(id) {

    let user = await UserRepository.readById(id);
    
    if (!user) {
      throw new NotFound('User not found');
    }

    let phones = await user.getPhones();
    for (let phone of phones) {
      phone.destroy();
    }
    
    let userInfo = await user.getUserInfo();
    await userInfo.destroy();
    
    return await user.destroy();
  }

  async get(options) {        
    return await UserRepository.get(options);
  }

  async _isConfirmedPass(password, confirmedPassword) {
    return password === confirmedPassword;
  }
}

module.exports = new UserService();