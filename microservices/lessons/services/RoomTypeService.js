import RoomTypeRepository from '../repositories/RoomTypeRepository';
import NotFound from '../../../core/errors/4xx/notFound'

class RoomTypeService {

    async create(roomType) {
        return await RoomTypeRepository.create(roomType)
    }

    async readAll() {
        return await RoomTypeRepository.readAll()
    }

    async readById(id) {

        let roomType = await RoomTypeRepository.readById(id)

        if (!roomType) {
            throw new NotFound('Room type not found')
        }

        return roomType
    }

    async update(id, roomType) {

        let roomType = await RoomTypeRepository.readById(id)
        
        if (!roomType) {
            throw new NotFound('Room type not found')
        }

        return await RoomTypeRepository.update(roomType)
    }

    async destroy(id) {

        let roomType = await RoomTypeRepository.readById(id)
        
        if (!roomType) {
            throw new NotFound('Room type not found')
        }
        
        return await RoomTypeRepository.destroy(id)
    }
}

export default new RoomTypeService()