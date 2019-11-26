import db from '../models'
import BaseRepository from '../../../core/BaseRepository'

export default class LectureRoomsRepository extends BaseRepository {

    constructor() {
        super(db.lecture_room, 'Lecture room')
    }

    async readById(id) {
        return await this._baseModel.findByPk(id, {
            include: [
                { model: db.room_type, as: 'RoomType' },
                { model: db.building, as: 'Building' },
            ],
        })
    }
}