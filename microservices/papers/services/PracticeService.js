import PracticeRepository from '../repositories/PracticeRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class PracticeService {

    _PracticeRepository = new PracticeRepository()

    async create(Practice) {
        return await this._PracticeRepository.create(Practice)
    }

    async readAll() {
        return await this._PracticeRepository.readAll()
    }

    async readById(id) {

        let Practice = await this._PracticeRepository.readById(id)

        if (!Practice) {
            throw new NotFound('Practice not found')
        }

        return Practice
    }

    async update(id, Practice) {

        let Practice = await this._PracticeRepository.readById(id)
        
        if (!Practice) {
            throw new NotFound('Practice not found')
        }

        return await this._PracticeRepository.update(Practice)
    }

    async destroy(id) {

        let Practice = await this._PracticeRepository.readById(id)
        
        if (!Practice) {
            throw new NotFound('Practice not found')
        }
        
        return await this._PracticeRepository.destroy(id)
    }
}