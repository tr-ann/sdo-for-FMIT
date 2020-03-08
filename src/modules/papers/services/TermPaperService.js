const TermPaperRepository = require('../repositories/TermPaperRepository');
const { NotFound } = require('../../../classes/errors');

class TermPaperService {

  async create(termPaper) {
    return await TermPaperRepository.create(termPaper);
  }

  async readAll() {
    return await TermPaperRepository.readAll();
  }

  async readById(id) {

    let termPaper = await TermPaperRepository.readById(id);

    if (!termPaper) {
      throw new NotFound('Term paper not found');
    }

    return termPaper;
  }

  async update(id, termPaper) {

    let oldTermPaper = await TermPaperRepository.readById(id);
    
    if (!oldTermPaper) {
      throw new NotFound('Term paper not found');
    }

    return await TermPaperRepository.update(id, termPaper);
  }

  async destroy(id) {

    let termPaper = await TermPaperRepository.readById(id);
    
    if (!termPaper) {
      throw new NotFound('Term paper not found');
    }
    
    return await TermPaperRepository.destroy(id);
  }
}

module.exports = new TermPaperService();