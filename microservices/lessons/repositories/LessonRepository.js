import db from '../models'
import BaseRepository from '../../../core/BaseRepository'

export default class LessonsRepository extends BaseRepository {

    constructor() {
        super(db.lesson, 'Lesson')
    }

    async readById(id) {
        return await this._baseModel.findByPk(id, {
            include: [
                { model: db.group, as: 'Group' },
                { model: db.subgroup, as: 'Subgroup' },
                { model: db.teacher, as: 'Teacher' },
                { model: db.lesson_type, as: 'LessonType' },
                { model: db.lecture_room, as: 'LectureRoom' },
                { model: db.discipline, as: 'Discipline' },
                { model: db.lesson_number, as: 'LessonNumber' },
            ],
        })
    }
}