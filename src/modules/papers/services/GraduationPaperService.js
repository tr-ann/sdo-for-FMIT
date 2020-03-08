const GraduationPaperRepository = require('../repositories/GraduationPaperRepository');
const { NotFound } = require('../../../classes/errors');

class GraduationPaperService {

  async create(graduationPaper) {
    return await GraduationPaperRepository.create(graduationPaper);
  }

  async readAll() {
    return await GraduationPaperRepository.readAll();
  }

  async readById(id) {

    let graduationPaper = await GraduationPaperRepository.readById(id);

    if (!graduationPaper) {
      throw new NotFound('Graduation paper not found');
    }

    return graduationPaper;
  }

  async update(id, graduationPaper) {

    let oldGraduationPaper = await GraduationPaperRepository.readById(id);
    
    if (!oldGraduationPaper) {
      throw new NotFound('Graduation paper not found');
    }

    return await GraduationPaperRepository.update(id, graduationPaper);
  }

  async destroy(id) {

    let graduationPaper = await GraduationPaperRepository.readById(id);
    
    if (!graduationPaper) {
      throw new NotFound('Graduation paper not found');
    }
    
    return await GraduationPaperRepository.destroy(id);
  }
}

module.exports = new GraduationPaperService();