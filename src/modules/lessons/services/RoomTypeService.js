const RoomTypeRepository = require('../repositories/RoomTypeRepository');
const { NotFound } = require('../../../classes/errors');

class RoomTypeService {

  async create(roomType) {
    return await RoomTypeRepository.create(roomType);
  }

  async readAll() {
    return await RoomTypeRepository.readAll();
  }

  async readById(id) {

    let roomType = await RoomTypeRepository.readById(id);

    if (!roomType) {
      throw new NotFound('Room type not found');
    }

    return roomType;
  }

  async update(id, roomType) {

    let oldRoomType = await RoomTypeRepository.readById(id);
    
    if (!oldRoomType) {
      throw new NotFound('Room type not found');
    }

    return await RoomTypeRepository.update(id, roomType);
  }

  async destroy(id) {

    let roomType = await RoomTypeRepository.readById(id);
    
    if (!roomType) {
      throw new NotFound('Room type not found');
    }
    
    return await RoomTypeRepository.destroy(id);
  }
}

module.exports = new RoomTypeService();