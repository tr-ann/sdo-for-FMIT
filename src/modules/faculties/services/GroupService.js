const GroupRepository = require('../repositories/GroupRepository');
const { NotFound } = require('../../../classes/errors');

class GroupService {
  
  async create(group) {
    return await GroupRepository.create(group);
  }

  async readAll() {
    return await GroupRepository.readAll();
  }

  async readById(id) {

    let group = await GroupRepository.readById(id);

    if (!group) {
      throw new NotFound(`Group not found`);
    }

    return group;
  }

  async update(id, group) {

    let nGroup = await GroupRepository.readById(id);
    
    if (!nGroup) {
      throw new NotFound(`Group not found`);
    }

    return await GroupRepository.update(id, group);
  }

  async destroy(id) {

    let group = await GroupRepository.readById(id);
    
    if (!group) {
      throw new NotFound(`Group not found`);
    }
    
    return await GroupRepository.destroy(id);
  }
}

module.exports = new GroupService();