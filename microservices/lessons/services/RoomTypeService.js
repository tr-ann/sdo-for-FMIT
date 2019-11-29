import RoomTypeRepository from '../repositories/RoomTypeRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class RoomTypeService {

    _roomTypeRepository = new RoomTypeRepository()

    async create(roomType) {
        return await this._roomTypeRepository.create(roomType)
    }

    async readAll() {
        return await this._roomTypeRepository.readAll()
    }

    async readById(id) {

        let roomType = await this._roomTypeRepository.readById(id)

        if (!roomType) {
            throw new NotFound('Room type not found')
        }

        return roomType
    }

    async update(id, roomType) {

        let roomType = await this._roomTypeRepository.readById(id)
        
        if (!roomType) {
            throw new NotFound('Room type not found')
        }

        return await this._roomTypeRepository.update(roomType)
    }

    async destroy(id) {

        let roomType = await this._roomTypeRepository.readById(id)
        
        if (!roomType) {
            throw new NotFound('Room type not found')
        }
        
        return await this._roomTypeRepository.destroy(id)
    }
}