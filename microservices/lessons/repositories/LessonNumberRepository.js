import db from '../models'
import BaseRepository from '../../../core/BaseRepository'

export default class LessonNumbersRepository extends BaseRepository {

    constructor() {
        super(db.lesson_number, 'Lesson number')
    }

    async readById(id) {
        return await this._baseModel.findByPk(id)
    }
}