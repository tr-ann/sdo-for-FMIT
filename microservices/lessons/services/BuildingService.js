import BuildingRepository from '../repositories/BuildingRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class BuildingService {

    _repository = new BuildingRepository()

    async create(building) {
        return await this._repository.create(building)
    }

    async readAll() {
        return await this._repository.readAll()
    }

    async readById(id) {

        let building = await this._repository.readById(id)

        if (!building) {
            throw new NotFound(`Building not found`)
        }

        return building
    }

    async update(id, building) {

        let building = await this._repository.readById(id)
        
        if (!building) {
            throw new NotFound(`Building not found`)
        }

        return await this._repository.update(building)
    }

    async destroy(id) {

        let building = await this._repository.readById(id)
        
        if (!building) {
            throw new NotFound(`Building not found`)
        }
        
        return await this._repository.destroy(id)
    }
}