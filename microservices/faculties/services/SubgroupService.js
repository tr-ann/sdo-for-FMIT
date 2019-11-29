import SubgroupRepository from '../repositories/SubgroupRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class SubgroupService {

    _repository = new SubgroupRepository()

    async create(subgroup) {
        return await this._repository.create(subgroup)
    }

    async readAll() {
        return await this._repository.readAll()
    }

    async readById(id) {

        let subgroup = await this._repository.readById(id)

        if (!subgroup) {
            throw new NotFound(`Subgroup not found`)
        }

        return subgroup
    }

    async update(id, subgroup) {

        let subgroup = await this._repository.readById(id)
        
        if (!subgroup) {
            throw new NotFound(`Subgroup not found`)
        }

        return await this._repository.update(subgroup)
    }

    async destroy(id) {

        let subgroup = await this._repository.readById(id)
        
        if (!subgroup) {
            throw new NotFound(`Subgroup not found`)
        }
        
        return await this._repository.destroy(id)
    }
}