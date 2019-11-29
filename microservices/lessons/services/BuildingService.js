import BuildingRepository from '../repositories/BuildingRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class BuildingService {

    _builfongRepository = new BuildingRepository()

    async create(building) {
        return await this._builfongRepository.create(building)
    }

    async readAll() {
        return await this._builfongRepository.readAll()
    }

    async readById(id) {

        let building = await this._builfongRepository.readById(id)

        if (!building) {
            throw new NotFound(`Building not found`)
        }

        return building
    }

    async update(id, building) {

        let building = await this._builfongRepository.readById(id)
        
        if (!building) {
            throw new NotFound(`Building not found`)
        }

        return await this._builfongRepository.update(building)
    }

    async destroy(id) {

        let building = await this._builfongRepository.readById(id)
        
        if (!building) {
            throw new NotFound(`Building not found`)
        }
        
        return await this._builfongRepository.destroy(id)
    }
}