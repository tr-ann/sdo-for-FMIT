const PracticeTypeRepository = require('../repositories/PracticeTypeRepository');
const { NotFound } = require('../../../classes/errors');

class PracticeTypeService {

  async create(practiceType) {
    return await PracticeTypeRepository.create(practiceType);
  }

  async readAll() {
    return await PracticeTypeRepository.readAll();
  }

  async readById(id) {

    let practiceType = await PracticeTypeRepository.readById(id);

    if (!practiceType) {
      throw new NotFound('Practice type not found');
    }

    return practiceType;
  }

  async update(id, practiceType) {

    let oldPracticeType = await PracticeTypeRepository.readById(id);
    
    if (!oldPracticeType) {
      throw new NotFound('Practice type not found');
    }

    return await PracticeTypeRepository.update(id, practiceType);
  }

  async destroy(id) {

    let practiceType = await PracticeTypeRepository.readById(id);
    
    if (!practiceType) {
      throw new NotFound('Practice type not found');
    }
    
    return await PracticeTypeRepository.destroy(id);
  }
}

module.exports = new PracticeTypeService();