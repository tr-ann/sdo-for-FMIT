const InfoFacultyRepository = require('../repositories/InfoFacultyRepository');
const { NotFound } = require('../../../classes/errors');

class InfoFacultyService {

  async create(infoFaculty) {
    return await InfoFacultyRepository.create(infoFaculty);
  }

  async readAll() {
    return await InfoFacultyRepository.readAll();
  }

  async readById(id) {

    let infoFaculty = await InfoFacultyRepository.readById(id);

    if (!infoFaculty) {
      throw new NotFound(`InfoFaculty not found`);
    }

    return infoFaculty;
  }

  async update(id, infoFaculty) {

    let nInfoFaculty = await InfoFacultyRepository.readById(id);
    
    if (!nInfoFaculty) {
      throw new NotFound(`InfoFaculty not found`);
    }

    return await InfoFacultyRepository.update(id, infoFaculty);
  }

  async destroy(id) {

    let infoFaculty = await InfoFacultyRepository.readById(id);
    
    if (!infoFaculty) {
      throw new NotFound(`InfoFaculty not found`);
    }
    
    return await InfoFacultyRepository.destroy(id);
  }
}

module.exports = new InfoFacultyService();