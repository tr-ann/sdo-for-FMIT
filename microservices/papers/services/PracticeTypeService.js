import PracticeTypeRepository from '../repositories/PracticeTypeRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class PracticeTypeService {

    _practiceTypeRepository = new PracticeTypeRepository()

    async create(practiceType) {
        return await this._practiceTypeRepository.create(practiceType)
    }

    async readAll() {
        return await this._practiceTypeRepository.readAll()
    }

    async readById(id) {

        let practiceType = await this._practiceTypeRepository.readById(id)

        if (!practiceType) {
            throw new NotFound('Practice type not found')
        }

        return practiceType
    }

    async update(id, practiceType) {

        let practiceType = await this._practiceTypeRepository.readById(id)
        
        if (!practiceType) {
            throw new NotFound('Practice type not found')
        }

        return await this._practiceTypeRepository.update(practiceType)
    }

    async destroy(id) {

        let practiceType = await this._practiceTypeRepository.readById(id)
        
        if (!practiceType) {
            throw new NotFound('Practice type not found')
        }
        
        return await this._practiceTypeRepository.destroy(id)
    }
}