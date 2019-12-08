import StatusRepository from '../repositories/StatusRepository';
import NotFound from '../../../classes/errors/4xx/notFound'

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
            throw new NotFound('Status not found')
        }

        return status
    }

    async update(id, status) {

        let oldStatus = await StatusRepository.readById(id)
        
        if (!oldStatus) {
            throw new NotFound('Status not found')
        }

        return await StatusRepository.update(id, status)
    }

    async destroy(id) {

        let status = await StatusRepository.readById(id)
        
        if (!status) {
            throw new NotFound('Status not found')
        }
        
        return await StatusRepository.destroy(id)
    }
}

export default new StatusService()