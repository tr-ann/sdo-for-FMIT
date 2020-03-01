const FacultyRepository = require('../repositories/FacultyRepository');
const { NotFound } = require('../../../classes/errors');

class FacultyService {

  async create(faculty) {
    return await FacultyRepository.create(faculty);
  }

  async readAll() {
    return await FacultyRepository.readAll();
  }

  async readById(id) {

    let faculty = await FacultyRepository.readById(id);

    if (!faculty) {
      throw new NotFound(`Faculty not found`);
    }

    return faculty;
  }

  async update(id, faculty) {

    let nFaculty = await FacultyRepository.readById(id);
    
    if (!nFaculty) {
      throw new NotFound(`Faculty not found`);
    }

    return await FacultyRepository.update(id, faculty);
  }

  async destroy(id) {

    let faculty = await FacultyRepository.readById(id);
    
    if (!faculty) {
      throw new NotFound(`Faculty not found`)
    };
    
    return await FacultyRepository.destroy(id);
  }
}

module.exports = new FacultyService();