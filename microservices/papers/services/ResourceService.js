import ResourceRepository from '../repositories/ResourceRepository';
import NotFound from '../../../core/errors/4xx/notFound'

class ResourceService {

    _repository = new ResourceRepository()

    async create(resource) {
        return await this._repository.create(resource)
    }

    async readAll() {
        return await this._repository.readAll()
    }

    async readById(id) {

        let resource = await this._repository.readById(id)

        if (!resource) {
            throw new NotFound(`Resource not found`)
        }

        return resource
    }

    async update(id, resource) {

        let nResource = await this._repository.readById(id)
        
        if (!nResource) {
            throw new NotFound(`Resource not found`)
        }

        return await this._repository.update(resource)
    }

    async destroy(id) {

        let resource = await this._repository.readById(id)
        
        if (!resource) {
            throw new NotFound(`Resource not found`)
        }
        
        return await this._repository.destroy(id)
    }
}

export default new ResourceService()