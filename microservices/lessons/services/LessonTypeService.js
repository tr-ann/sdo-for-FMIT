import LessonTypeRepository from '../repositories/LessonTypeRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class LessonTypeService {

    _repository = new LessonTypeRepository()

    async create(lessonType) {
        return await this._repository.create(lessonType)
    }

    async readAll() {
        return await this._repository.readAll()
    }

    async readById(id) {

        let lessonType = await this._repository.readById(id)

        if (!lessonType) {
            throw new NotFound('Lesson type not found')
        }

        return lessonType
    }

    async update(id, lessonType) {

        let lessonType = await this._repository.readById(id)
        
        if (!lessonType) {
            throw new NotFound('Lesson type not found')
        }

        return await this._repository.update(lessonType)
    }

    async destroy(id) {

        let lessonType = await this._repository.readById(id)
        
        if (!lessonType) {
            throw new NotFound('Lesson type not found')
        }
        
        return await this._repository.destroy(id)
    }
}