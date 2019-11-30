import TermPaperRepository from '../repositories/TermPaperRepository';
import NotFound from '../../../core/errors/4xx/notFound'

class TermPaperService {

    async create(termPaper) {
        return await TermPaperRepository.create(termPaper)
    }

    async readAll() {
        return await TermPaperRepository.readAll()
    }

    async readById(id) {

        let termPaper = await TermPaperRepository.readById(id)

        if (!termPaper) {
            throw new NotFound('Term paper not found')
        }

        return termPaper
    }

    async update(id, termPaper) {

        let termPaper = await TermPaperRepository.readById(id)
        
        if (!termPaper) {
            throw new NotFound('Term paper not found')
        }

        return await TermPaperRepository.update(termPaper)
    }

    async destroy(id) {

        let termPaper = await TermPaperRepository.readById(id)
        
        if (!termPaper) {
            throw new NotFound('Term paper not found')
        }
        
        return await TermPaperRepository.destroy(id)
    }
}

export default new TermPaperService()