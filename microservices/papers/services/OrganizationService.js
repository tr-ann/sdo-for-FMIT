import OrganizationRepository from '../repositories/OrganizationRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class OrganizationService {

    _organizationRepository = new OrganizationRepository()

    async create(organization) {
        return await this._organizationRepository.create(organization)
    }

    async readAll() {
        return await this._organizationRepository.readAll()
    }

    async readById(id) {

        let organization = await this._organizationRepository.readById(id)

        if (!organization) {
            throw new NotFound('Organization not found')
        }

        return organization
    }

    async update(id, organization) {

        let organization = await this._organizationRepository.readById(id)
        
        if (!organization) {
            throw new NotFound('Organization not found')
        }

        return await this._organizationRepository.update(organization)
    }

    async destroy(id) {

        let organization = await this._organizationRepository.readById(id)
        
        if (!organization) {
            throw new NotFound('Organization not found')
        }
        
        return await this._organizationRepository.destroy(id)
    }
}