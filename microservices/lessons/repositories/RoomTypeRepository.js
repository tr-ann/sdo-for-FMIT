import db from '../models'
import BaseRepository from '../../../core/BaseRepository'

export default class RoomTypesRepository extends BaseRepository {

    constructor() {
        super(db.room_type, 'Room type')
    }

    async readById(id) {
        return await this._baseModel.findByPk(id)
    }
}