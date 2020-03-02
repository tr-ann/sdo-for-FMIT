const UserRepository = require('../repositories/UserRepository');
const { NotFound } = require('../../../classes/errors');
const Hash = require('../../../classes/Hash');

class UserService {

  async create(user) {
    
    let nUser = await UserRepository.create(user);
    delete nUser.password;

    return nUser;
  }

  async readAll() {
    return await UserRepository.readAll();
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
      
      if (user.password) {
        user.password = Hash.get(user.password);
      }

      return await UserRepository.update(id, user);
  }

  async destroy(id) {

    let user = await UserRepository.readById(id);
    
    if (!user) {
      throw new NotFound('User not found');
    }
    
    return await UserRepository.destroy(id);
  }

  async get(options) {        
    return await UserRepository.get(options);
  }

  async getAll(options) {        
    return await UserRepository.getAll(options);
  }
}

module.exports = new UserService();