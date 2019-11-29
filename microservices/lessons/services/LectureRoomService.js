import LectureRoomRepository from '../repositories/LectureRoomRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class LectureRoomService {

    _lectureRoomRepository = new LectureRoomRepository()

    async create(lectureRoom) {
        return await this._lectureRoomRepository.create(lectureRoom)
    }

    async readAll() {
        return await this._lectureRoomRepository.readAll()
    }

    async readById(id) {

        let lectureRoom = await this._lectureRoomRepository.readById(id)

        if (!lectureRoom) {
            throw new NotFound('Lecture room not found')
        }

        return lectureRoom
    }

    async update(id, lectureRoom) {

        let lectureRoom = await this._lectureRoomRepository.readById(id)
        
        if (!lectureRoom) {
            throw new NotFound('Lecture room not found')
        }

        return await this._lectureRoomRepository.update(lectureRoom)
    }

    async destroy(id) {

        let lectureRoom = await this._lectureRoomRepository.readById(id)
        
        if (!lectureRoom) {
            throw new NotFound('Lecture room not found')
        }
        
        return await this._lectureRoomRepository.destroy(id)
    }
}