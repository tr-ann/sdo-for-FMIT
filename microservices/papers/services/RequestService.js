import RequestRepository from '../repositories/RequestRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class RequestService {

    _requestRepository = new RequestRepository()

    async create(request) {
        return await this._requestRepository.create(request)
    }

    async readAll() {
        return await this._requestRepository.readAll()
    }

    async readById(id) {

        let request = await this._requestRepository.readById(id)

        if (!request) {
            throw new NotFound('Request not found')
        }

        return request
    }

    async update(id, request) {

        let request = await this._requestRepository.readById(id)
        
        if (!request) {
            throw new NotFound('Request not found')
        }

        return await this._requestRepository.update(request)
    }

    async destroy(id) {

        let request = await this._requestRepository.readById(id)
        
        if (!request) {
            throw new NotFound('Request not found')
        }
        
        return await this._requestRepository.destroy(id)
    }
}