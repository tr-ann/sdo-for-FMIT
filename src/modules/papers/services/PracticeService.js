const PracticeRepository = require('../repositories/PracticeRepository');
const { NotFound } = require('../../../classes/errors');

class PracticeService {

  async create(practice) {
    return await PracticeRepository.create(practice);
  }

  async readAll() {
    return await PracticeRepository.readAll();
  }

  async readById(id) {

    let practice = await PracticeRepository.readById(id);

    if (!practice) {
      throw new NotFound('Practice not found');
    }

    return practice;
  }

  async update(id, practice) {

    let oldPractice = await PracticeRepository.readById(id);
    
    if (!oldPractice) {
      throw new NotFound('Practice not found');
    }

    return await PracticeRepository.update(id, practice);
  }

  async destroy(id) {

    let practice = await PracticeRepository.readById(id);
    
    if (!practice) {
      throw new NotFound('Practice not found');
    }
    
    return await PracticeRepository.destroy(id);
  }
}

module.exports = new PracticeService();