import ResourceRepository from '../repositories/ResourceRepository';
import NotFound from '../../../core/errors/4xx/notFound'

class ResourceService {

    async create(resource) {
        return await ResourceRepository.create(resource)
    }

    async readAll() {
        return await ResourceRepository.readAll()
    }

    async readById(id) {

        let resource = await ResourceRepository.readById(id)

        if (!resource) {
            throw new NotFound('Resource not found')
        }

        return resource
    }

    async update(id, resource) {

        let nResource = await ResourceRepository.readById(id)
        
        if (!nResource) {
            throw new NotFound('Resource not found')
        }

        return await ResourceRepository.update(id, resource)
    }

    async destroy(id) {

        let resource = await ResourceRepository.readById(id)
        
        if (!resource) {
            throw new NotFound('Resource not found')
        }
        
        return await ResourceRepository.destroy(id)
    }
}

export default new ResourceService()