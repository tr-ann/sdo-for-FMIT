import SpecialtyRepository from '../repositories/SpecialtyRepository';
import NotFound from '../../../core/errors/4xx/notFound'

class SpecialtyService {

    async create(specialty) {
        return await this._repository.create(specialty)
    }

    async readAll() {
        return await this._repository.readAll()
    }

    async readById(id) {

        let specialty = await this._repository.readById(id)

        if (!specialty) {
            throw new NotFound(`Specialty not found`)
        }

        return specialty
    }

    async update(id, specialty) {

        let nSpecialty = await this._repository.readById(id)
        
        if (!nSpecialty) {
            throw new NotFound(`Specialty not found`)
        }

        return await this._repository.update(specialty)
    }

    async destroy(id) {

        let specialty = await this._repository.readById(id)
        
        if (!specialty) {
            throw new NotFound(`Specialty not found`)
        }
        
        return await this._repository.destroy(id)
    }
}

export default new SpecialtyService()