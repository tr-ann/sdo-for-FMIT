const DisciplineRepository = require('../repositories/DisciplineRepository');
const { NotFound } = require('../../../classes/errors');

class DisciplineService {

  async create(discipline) {
    return await DisciplineRepository.create(discipline);
  }

  async readAll() {
    return await DisciplineRepository.readAll();
  }

  async readById(id) {

    let discipline = await DisciplineRepository.readById(id);

    if (!discipline) {
      throw new NotFound('Discipline not found');
    }

    return discipline;
  }

  async update(id, discipline) {

    let oldDiscipline = await DisciplineRepository.readById(id);
    
    if (!oldDiscipline) {
      throw new NotFound('Discipline not found');
    }

    return await DisciplineRepository.update(id, discipline);
  }

  async destroy(id) {

    let discipline = await DisciplineRepository.readById(id);
    
    if (!discipline) {
      throw new NotFound('Discipline not found');
    }
    
    return await DisciplineRepository.destroy(id);
  }
}

module.exports = new DisciplineService();