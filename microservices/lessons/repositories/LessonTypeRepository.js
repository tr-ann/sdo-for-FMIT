import db from '../models'
import BaseRepository from '../../../core/BaseRepository'

export default class LessonTypesRepository extends BaseRepository {

    constructor() {
        super(db.lesson_type, 'Lesson type')
    }

    async readById(id) {
        return await this._baseModel.findByPk(id)
    }
}