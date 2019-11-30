import TermPaperRepository from '../repositories/TermPaperRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class TermPaperService {

    _tempPaperRepository = new TermPaperRepository()

    async create(termPaper) {
        return await this._tempPaperRepository.create(termPaper)
    }

    async readAll() {
        return await this._tempPaperRepository.readAll()
    }

    async readById(id) {

        let termPaper = await this._tempPaperRepository.readById(id)

        if (!termPaper) {
            throw new NotFound('Term paper not found')
        }

        return termPaper
    }

    async update(id, termPaper) {

        let termPaper = await this._tempPaperRepository.readById(id)
        
        if (!termPaper) {
            throw new NotFound('Term paper not found')
        }

        return await this._tempPaperRepository.update(termPaper)
    }

    async destroy(id) {

        let termPaper = await this._tempPaperRepository.readById(id)
        
        if (!termPaper) {
            throw new NotFound('Term paper not found')
        }
        
        return await this._tempPaperRepository.destroy(id)
    }
}