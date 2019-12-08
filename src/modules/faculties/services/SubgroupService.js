import SubgroupRepository from '../repositories/SubgroupRepository';
import NotFound from '../../../classes/errors/4xx/notFound'

class SubgroupService {

    async create(subgroup) {
        return await SubgroupRepository.create(subgroup)
    }

    async readAll() {
        return await SubgroupRepository.readAll()
    }

    async readById(id) {

        let subgroup = await SubgroupRepository.readById(id)

        if (!subgroup) {
            throw new NotFound(`Subgroup not found`)
        }

        return subgroup
    }

    async update(id, subgroup) {

        let nSubgroup = await SubgroupRepository.readById(id)
        
        if (!nSubgroup) {
            throw new NotFound(`Subgroup not found`)
        }

        return await SubgroupRepository.update(id, subgroup)
    }

    async destroy(id) {

        let subgroup = await SubgroupRepository.readById(id)
        
        if (!subgroup) {
            throw new NotFound(`Subgroup not found`)
        }
        
        return await SubgroupRepository.destroy(id)
    }
}

export default new SubgroupService()