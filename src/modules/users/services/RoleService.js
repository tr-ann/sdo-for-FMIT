import RoleRepository from '../repositories/RoleRepository';
import NotFound from '../../../classes/errors/4xx/notFound'

class RoleService {

    async create(role) {
        return await RoleRepository.create(role)
    }

    async readAll() {
        return await RoleRepository.readAll()
    }

    async readById(id) {

        let role = await RoleRepository.readById(id)

        if (!role) {
            throw new NotFound('Role not found')
        }

        return role
    }

    async update(id, role) {

        let oldRole = await RoleRepository.readById(id)
        
        if (!oldRole) {
            throw new NotFound('Role not found')
        }

        return await RoleRepository.update(id, role)
    }

    async destroy(id) {

        let role = await RoleRepository.readById(id)
        
        if (!role) {
            throw new NotFound('Role not found')
        }
        
        return await RoleRepository.destroy(id)
    }
}

export default new RoleService()