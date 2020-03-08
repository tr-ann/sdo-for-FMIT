const BuildingRepository = require('../repositories/BuildingRepository');
const { NotFound } = require('../../../classes/errors');

class BuildingService {

  async create(building) {
    return await BuildingRepository.create(building);
  }

  async readAll() {
    return await BuildingRepository.readAll();
  }

  async readById(id) {

    let building = await BuildingRepository.readById(id);

    if (!building) {
      throw new NotFound('Building not found');
    }

    return building;
  }

  async update(id, building) {

    let oldBuilding = await BuildingRepository.readById(id);
    
    if (!oldBuilding) {
      throw new NotFound('Building not found');
    }

    return await BuildingRepository.update(id, building);
  }

  async destroy(id) {

    let building = await BuildingRepository.readById(id);
    
    if (!building) {
      throw new NotFound('Building not found');
    }
    
    return await BuildingRepository.destroy(id);
  }
}

module.exports = new BuildingService();