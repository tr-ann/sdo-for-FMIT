import PositionRepository from '../repositories/PositionRepository'

export default class PositionService {

    _repository = new PositionRepository()

    /*  ????  */
    async list() {
        return await this._repository.readAll()
    }

    async create(position) {
        return await this._repository.create(position)
    }

    /*  ????  */
    async findById(id) {
        let position = await this._repository.readById(id)
        if (!position) {
            throw new NotFound(`${objectName} not found`)
        }
        return position
    }

    async update(id, position) {
        return await this._repository.update(id, position)
    }

    async destroy(id) {
        return await this._repository.destroy(id)
    }
};