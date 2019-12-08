import RoleUrlRepository from '../repositories/RoleUrlRepository'
import NotFound from '../../../classes/errors/4xx/notFound'

class RoleUrlService {

    async readAll() {
        return await RoleUrlRepository.readAll()
    }

    async create(role_url) {
        return await RoleUrlRepository.create(role_url)
    }

    async findById(id) {
        let role_url = await RoleUrlRepository.readById(id)
        if (!role_url) {
            throw new NotFound(`${objectName} not found`)
        }
        return role_url
    }

    async update(id, role_url) {
        let nUserRole = RoleUrlRepository.readById(id)
        if(!nUserRole) {
            throw new NotFound(`${objectName} not found`)
        }
        return await RoleUrlRepository.update(id, role_url)
    }

    async get(options) {
        return await RoleUrlRepository.get(options)
    }

    async destroy(id) {
        await RoleUrlRepository.destroy(id)
    }
}

export default new RoleUrlService()