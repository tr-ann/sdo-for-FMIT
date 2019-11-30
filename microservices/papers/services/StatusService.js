import StatusRepository from '../repositories/StatusRepository';
import NotFound from '../../../core/errors/4xx/notFound'

class StatusService {

    async create(status) {
        return await StatusRepository.create(status)
    }

    async readAll() {
        return await StatusRepository.readAll()
    }

    async readById(id) {

        let status = await StatusRepository.readById(id)

        if (!status) {
            throw new NotFound('Room type not found')
        }

        return status
    }

    async update(id, status) {

        let status = await StatusRepository.readById(id)
        
        if (!status) {
            throw new NotFound('Room type not found')
        }

        return await StatusRepository.update(status)
    }

    async destroy(id) {

        let status = await StatusRepository.readById(id)
        
        if (!status) {
            throw new NotFound('Room type not found')
        }
        
        return await StatusRepository.destroy(id)
    }
}

export default new StatusService()