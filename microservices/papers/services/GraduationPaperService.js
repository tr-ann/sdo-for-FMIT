import GraduationPaperRepository from '../repositories/GraduationPaperRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class GraduationPaperService {

    _graduationPaperRepository = new GraduationPaperRepository()

    async create(graduationPaper) {
        return await this._graduationPaperRepository.create(graduationPaper)
    }

    async readAll() {
        return await this._graduationPaperRepository.readAll()
    }

    async readById(id) {

        let graduationPaper = await this._graduationPaperRepository.readById(id)

        if (!graduationPaper) {
            throw new NotFound('Graduation paper not found')
        }

        return graduationPaper
    }

    async update(id, graduationPaper) {

        let graduationPaper = await this._graduationPaperRepository.readById(id)
        
        if (!graduationPaper) {
            throw new NotFound('Graduation paper not found')
        }

        return await this._graduationPaperRepository.update(graduationPaper)
    }

    async destroy(id) {

        let graduationPaper = await this._graduationPaperRepository.readById(id)
        
        if (!graduationPaper) {
            throw new NotFound('Graduation paper not found')
        }
        
        return await this._graduationPaperRepository.destroy(id)
    }
}