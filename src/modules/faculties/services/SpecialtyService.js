const SpecialtyRepository = require('../repositories/SpecialtyRepository');
const { NotFound } = require('../../../classes/errors');

class SpecialtyService {

  async create(specialty) {
    return await SpecialtyRepository.create(specialty);
  }

  async readAll() {
    return await SpecialtyRepository.readAll();
  }

  async readById(id) {

    let specialty = await SpecialtyRepository.readById(id);

    if (!specialty) {
      throw new NotFound(`Specialty not found`);
    }

    return specialty;
  }

  async update(id, specialty) {

    let nSpecialty = await SpecialtyRepository.readById(id);
    
    if (!nSpecialty) {
      throw new NotFound(`Specialty not found`);
    }

    return await SpecialtyRepository.update(id, specialty);
  }

  async destroy(id) {

    let specialty = await SpecialtyRepository.readById(id);
    
    if (!specialty) {
      throw new NotFound(`Specialty not found`);
    }
    
    return await SpecialtyRepository.destroy(id);
  }
}

module.exports = new SpecialtyService();