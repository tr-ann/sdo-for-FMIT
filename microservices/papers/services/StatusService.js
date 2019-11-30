import StatusRepository from '../repositories/StatusRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class StatusService {

    _statusRepository = new StatusRepository()

    async create(status) {
        return await this._statusRepository.create(status)
    }

    async readAll() {
        return await this._statusRepository.readAll()
    }

    async readById(id) {

        let status = await this._statusRepository.readById(id)

        if (!status) {
            throw new NotFound('Room type not found')
        }

        return status
    }

    async update(id, status) {

        let status = await this._statusRepository.readById(id)
        
        if (!status) {
            throw new NotFound('Room type not found')
        }

        return await this._statusRepository.update(status)
    }

    async destroy(id) {

        let status = await this._statusRepository.readById(id)
        
        if (!status) {
            throw new NotFound('Room type not found')
        }
        
        return await this._statusRepository.destroy(id)
    }
}