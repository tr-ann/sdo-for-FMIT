import GroupRepository from '../repositories/GroupRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class GroupService {

    _repository = new GroupRepository()

    async create(group) {
        return await this._repository.create(group)
    }

    async readAll() {
        return await this._repository.readAll()
    }

    async readById(id) {

        let group = await this._repository.readById(id)

        if (!group) {
            throw new NotFound(`Group not found`)
        }

        return group
    }

    async update(id, group) {

        let group = await this._repository.readById(id)
        
        if (!group) {
            throw new NotFound(`Group not found`)
        }

        return await this._repository.update(group)
    }

    async destroy(id) {

        let group = await this._repository.readById(id)
        
        if (!group) {
            throw new NotFound(`Group not found`)
        }
        
        return await this._repository.destroy(id)
    }
}