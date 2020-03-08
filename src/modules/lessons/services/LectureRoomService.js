const LectureRoomRepository = require('../repositories/LectureRoomRepository');
const { NotFound } = require('../../../classes/errors');

class LectureRoomService {

  async create(lectureRoom) {
    return await LectureRoomRepository.create(lectureRoom);
  }

  async readAll() {
      return await LectureRoomRepository.readAll();
  }

  async readById(id) {

    let lectureRoom = await LectureRoomRepository.readById(id);

    if (!lectureRoom) {
      throw new NotFound('Lecture room not found');
    }

    return lectureRoom;
  }

  async update(id, lectureRoom) {

    let oldLectureRoom = await LectureRoomRepository.readById(id);
    
    if (!oldLectureRoom) {
      throw new NotFound('Lecture room not found');
    }

    return await LectureRoomRepository.update(id, lectureRoom);
  }

  async destroy(id) {

    let lectureRoom = await LectureRoomRepository.readById(id);
    
    if (!lectureRoom) {
      throw new NotFound('Lecture room not found');
    }
    
    return await LectureRoomRepository.destroy(id);
  }
}

module.exports = new LectureRoomService();