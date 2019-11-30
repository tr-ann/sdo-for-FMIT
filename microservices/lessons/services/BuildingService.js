import BuildingRepository from '../repositories/BuildingRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class BuildingService {

    _buildingRepository = new BuildingRepository()

    async create(building) {
        return await this._buildingRepository.create(building)
    }

    async readAll() {
        return await this._buildingRepository.readAll()
    }

    async readById(id) {

        let building = await this._buildingRepository.readById(id)

        if (!building) {
            throw new NotFound('Building not found')
        }

        return building
    }

    async update(id, building) {

        let building = await this._buildingRepository.readById(id)
        
        if (!building) {
            throw new NotFound('Building not found')
        }

        return await this._buildingRepository.update(building)
    }

    async destroy(id) {

        let building = await this._buildingRepository.readById(id)
        
        if (!building) {
            throw new NotFound('Building not found')
        }
        
        return await this._buildingRepository.destroy(id)
    }
}