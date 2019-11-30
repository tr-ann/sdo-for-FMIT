import OrganizationRepository from '../repositories/OrganizationRepository';
import NotFound from '../../../core/errors/4xx/notFound'

class OrganizationService {

    async create(organization) {
        return await OrganizationRepository.create(organization)
    }

    async readAll() {
        return await OrganizationRepository.readAll()
    }

    async readById(id) {

        let organization = await OrganizationRepository.readById(id)

        if (!organization) {
            throw new NotFound('Organization not found')
        }

        return organization
    }

    async update(id, organization) {

        let oldOrganization = await OrganizationRepository.readById(id)
        
        if (!oldOrganization) {
            throw new NotFound('Organization not found')
        }

        return await OrganizationRepository.update(id, organization)
    }

    async destroy(id) {

        let organization = await OrganizationRepository.readById(id)
        
        if (!organization) {
            throw new NotFound('Organization not found')
        }
        
        return await OrganizationRepository.destroy(id)
    }
}

export default new OrganizationService()