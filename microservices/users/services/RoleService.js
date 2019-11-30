import RoleRepository from '../repositories/RoleRepository'

class RoleService {

    async list() {
        return await RoleRepository.readAll()
    }

    async create(role) {
        return await RoleRepository.create(role)
    }

    async findById(id) {
        let role = await RoleRepository.readById(id)
        if (!role) {
            throw new NotFound(`${objectName} not found`)
        }
        return role
    }

    async update(id, role) {
        return await RoleRepository.update(id, role)
    }

    async destroy(id) {
        await RoleRepository.destroy(id)
    }
}

export default new RoleService()