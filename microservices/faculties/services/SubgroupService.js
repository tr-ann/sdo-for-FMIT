import SubgroupRepository from '../repositories/SubgroupRepository';
import NotFound from '../../../core/errors/4xx/notFound'

class SubgroupService {

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

        let nSubgroup = await this._repository.readById(id)
        
        if (!nSubgroup) {
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

export default new SubgroupService()