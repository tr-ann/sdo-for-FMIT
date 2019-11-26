import RoomTypeRepository from '../repositories/RoomTypeRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class RoomTypeService {

    _repository = new RoomTypeRepository()

    async create(roomType) {
        return await this._repository.create(roomType)
    }

    async readAll() {
        return await this._repository.readAll()
    }

    async readById(id) {

        let roomType = await this._repository.readById(id)

        if (!roomType) {
            throw new NotFound('Room type not found')
        }

        return roomType
    }

    async update(id, roomType) {

        let roomType = await this._repository.readById(id)
        
        if (!roomType) {
            throw new NotFound('Room type not found')
        }

        return await this._repository.update(roomType)
    }

    async destroy(id) {

        let roomType = await this._repository.readById(id)
        
        if (!roomType) {
            throw new NotFound('Room type not found')
        }
        
        return await this._repository.destroy(id)
    }
}