import LectureRoomRepository from '../repositories/LectureRoomRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class LectureRoomService {

    _repository = new LectureRoomRepository()

    async create(lectureRoom) {
        return await this._repository.create(lectureRoom)
    }

    async readAll() {
        return await this._repository.readAll()
    }

    async readById(id) {

        let lectureRoom = await this._repository.readById(id)

        if (!lectureRoom) {
            throw new NotFound('Lecture room not found')
        }

        return lectureRoom
    }

    async update(id, lectureRoom) {

        let lectureRoom = await this._repository.readById(id)
        
        if (!lectureRoom) {
            throw new NotFound('Lecture room not found')
        }

        return await this._repository.update(lectureRoom)
    }

    async destroy(id) {

        let lectureRoom = await this._repository.readById(id)
        
        if (!lectureRoom) {
            throw new NotFound('Lecture room not found')
        }
        
        return await this._repository.destroy(id)
    }
}