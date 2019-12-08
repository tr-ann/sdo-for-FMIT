import RequestRepository from '../repositories/RequestRepository';
import NotFound from '../../../classes/errors/4xx/notFound'

class RequestService {

    async create(request) {
        return await RequestRepository.create(request)
    }

    async readAll() {
        return await RequestRepository.readAll()
    }

    async readById(id) {

        let request = await RequestRepository.readById(id)

        if (!request) {
            throw new NotFound('Request not found')
        }

        return request
    }

    async update(id, request) {

        let oldRequest = await RequestRepository.readById(id)
        
        if (!oldRequest) {
            throw new NotFound('Request not found')
        }

        return await RequestRepository.update(id, request)
    }

    async destroy(id) {

        let request = await RequestRepository.readById(id)
        
        if (!request) {
            throw new NotFound('Request not found')
        }
        
        return await RequestRepository.destroy(id)
    }
}

export default new RequestService()