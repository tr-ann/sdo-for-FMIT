import PracticeRepository from '../repositories/PracticeRepository';
import NotFound from '../../../core/errors/4xx/notFound'

class PracticeService {

    async create(Practice) {
        return await PracticeRepository.create(Practice)
    }

    async readAll() {
        return await PracticeRepository.readAll()
    }

    async readById(id) {

        let Practice = await PracticeRepository.readById(id)

        if (!Practice) {
            throw new NotFound('Practice not found')
        }

        return Practice
    }

    async update(id, Practice) {

        let Practice = await PracticeRepository.readById(id)
        
        if (!Practice) {
            throw new NotFound('Practice not found')
        }

        return await PracticeRepository.update(Practice)
    }

    async destroy(id) {

        let Practice = await PracticeRepository.readById(id)
        
        if (!Practice) {
            throw new NotFound('Practice not found')
        }
        
        return await PracticeRepository.destroy(id)
    }
}

export default new PracticeService()