import GroupRepository from '../repositories/GroupRepository';
import NotFound from '../../../classes/errors/4xx/notFound'

class GroupService {
    
    async create(group) {
        return await GroupRepository.create(group)
    }

    async readAll() {
        return await GroupRepository.readAll()
    }

    async readById(id) {

        let group = await GroupRepository.readById(id)

        if (!group) {
            throw new NotFound(`Group not found`)
        }

        return group
    }

    async update(id, group) {

        let nGroup = await GroupRepository.readById(id)
        
        if (!nGroup) {
            throw new NotFound(`Group not found`)
        }

        return await GroupRepository.update(id, group)
    }

    async destroy(id) {

        let group = await GroupRepository.readById(id)
        
        if (!group) {
            throw new NotFound(`Group not found`)
        }
        
        return await GroupRepository.destroy(id)
    }
}

export default new GroupService()